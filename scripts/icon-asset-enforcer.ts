// icon-asset-enforcer.ts
// Enforcement script for icon asset token/file sync
// Checks that every icon listed in tokens/icons.md has a corresponding .svg file in /assets/icons, and vice versa.
// Reports missing or orphaned files/tokens with clear error messages. Only manages icon assets.

import { join, basename } from "jsr:@std/path";
import { ZipReader, Uint8ArrayReader } from "jsr:@zip-js/zip-js";

const ICONS_MD = join("tokens", "icons.md");
const ICONS_DIR = join("assets", "icons");

async function parseIconTokens() {
  const decoder = new TextDecoder("utf-8");
  const content = decoder.decode(await Deno.readFile(ICONS_MD));
  const lines = content.split("\n");
  const iconFiles: string[] = [];
  let inTable = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith("| Icon Name")) inTable = true;
    else if (inTable && line.trim().startsWith("|---")) continue;
    else if (inTable && line.trim().startsWith("|")) {
      // Join lines until we have at least 4 columns
      let currentLine = line;
      let cols = currentLine.split("|").map((s) => s.trim());
      while (cols.length < 5 && i + 1 < lines.length) { // 5 because split on | gives empty at start/end
        i++;
        currentLine += lines[i];
        cols = currentLine.split("|").map((s) => s.trim());
      }
      if (cols.length < 5) continue;
      const file = cols[3]; // File Example column
      if (file && file.endsWith(".svg")) {
        iconFiles.push(file);
      }
    } else if (inTable && !line.trim().startsWith("|")) break;
  }
  return iconFiles;
}

async function listIconFiles() {
  const files: string[] = [];
  for await (const entry of Deno.readDir(ICONS_DIR)) {
    if (entry.isFile && entry.name.endsWith(".svg")) {
      files.push(entry.name);
    }
  }
  return files;
}

async function removeOrphanedIconFiles(tokenFiles: string[], actualFiles: string[]) {
  const orphaned = actualFiles.filter(f => !tokenFiles.includes(f));
  for (const file of orphaned) {
    try {
      await Deno.remove(join(ICONS_DIR, file));
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      console.error(`Failed to remove orphaned file ${file}:`, msg);
    }
  }
}

// --- Lucide icon download automation ---
// Download all required Lucide icons as SVGs from the Lucide CDN

async function getLatestLucideRelease() {
  const res = await fetch("https://api.github.com/repos/lucide-icons/lucide/releases/latest");
  if (!res.ok) throw new Error("Failed to fetch latest Lucide release");
  const data = await res.json();
  // Defensive: ensure tag_name is present and valid
  if (!data.tag_name || typeof data.tag_name !== "string") {
    throw new Error("Lucide release tag_name missing or invalid");
  }
  // Remove 'v' prefix if present
  return data.tag_name.replace(/^v/, "");
}

async function downloadFile(url: string, dest: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download ${url}`);
  const arrayBuffer = await res.arrayBuffer();
  await Deno.writeFile(dest, new Uint8Array(arrayBuffer));
}

async function unzipLucideIcons(zipPath: string, destDir: string, neededFiles: string[]) {
  const zipData = await Deno.readFile(zipPath);
  const reader = new ZipReader(new Uint8ArrayReader(zipData));
  const entries = await reader.getEntries();
  const { Uint8ArrayWriter } = await import("jsr:@zip-js/zip-js");
  const neededSet = new Set(neededFiles.map(f => f.toLowerCase()));
  let extractedCount = 0;
  for (const entry of entries) {
    if (!entry.directory && entry.filename.startsWith("icons/") && entry.filename.endsWith(".svg")) {
      const iconName = basename(entry.filename).toLowerCase();
      if (neededSet.has(iconName)) {
        if (typeof entry.getData === "function") {
          const fileData = await entry.getData(new Uint8ArrayWriter());
          const outPath = join(destDir, basename(entry.filename));
          await Deno.writeFile(outPath, fileData);
          extractedCount++;
        }
      }
    }
  }
  await reader.close();
  if (extractedCount === 0) {
    throw new Error("No Lucide icons were extracted. Check that needed icon filenames match Lucide SVGs exactly.");
  }
}

async function ensureLucideIcons(iconFiles: string[]) {
  await Deno.mkdir(ICONS_DIR, { recursive: true });
  // Download and extract Lucide icons zip
  const release = await getLatestLucideRelease();
  const zipUrl = `https://github.com/lucide-icons/lucide/releases/download/${release}/lucide-icons-${release}.zip`;
  const zipPath = join(ICONS_DIR, `lucide-icons-${release}.zip`);
  await downloadFile(zipUrl, zipPath);
  await unzipLucideIcons(zipPath, ICONS_DIR, iconFiles);
  try {
    await Deno.remove(zipPath);
  } catch { /* zip file removed after extraction */ }
}

async function ensureLucideLicense() {
  const licenseUrl = "https://raw.githubusercontent.com/lucide-icons/lucide/main/LICENSE";
  const licenseDest = join(ICONS_DIR, "lucide-license.txt");
  try { await Deno.stat(licenseDest); } catch { await downloadFile(licenseUrl, licenseDest); }
}

async function main() {
  const tokenFiles = await parseIconTokens();
  await ensureLucideIcons(tokenFiles);
  await ensureLucideLicense();
  const actualFiles = await listIconFiles();
  const missing = tokenFiles.filter(f => !actualFiles.includes(f));
  const orphaned = actualFiles.filter(f => !tokenFiles.includes(f));
  // Enforce license file presence
  try { await Deno.stat(join(ICONS_DIR, "lucide-license.txt")); } catch {
    console.error("Missing Lucide license file (lucide-license.txt) in /assets/icons");
    Deno.exit(1);
  }
  if (missing.length > 0) {
    console.error("Missing icon files (listed in tokens/icons.md but not found in /assets/icons):", missing);
  }
  if (orphaned.length > 0) {
    console.error("Orphaned icon files (present in /assets/icons but not listed in tokens/icons.md):", orphaned);
    await removeOrphanedIconFiles(tokenFiles, actualFiles);
  }
  if (missing.length === 0 && orphaned.length === 0) {
    console.log("✅ All icon files are in sync with tokens/icons.md and license present.");
  }
}

if (import.meta.main) {
  main();
}
