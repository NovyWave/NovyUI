// font-asset-enforcer.ts
// Enforcement script for font asset token/file sync
// Checks that every font/weight/style listed in tokens/fonts.md has both .woff2 and .ttf files in /assets/fonts, and vice versa.
// Reports missing or orphaned files/tokens with clear error messages. Only manages font assets.

import { join, basename } from "jsr:@std/path";
import { ensureDir } from "https://deno.land/std@0.203.0/fs/ensure_dir.ts";
import { ZipReader, Uint8ArrayReader } from "jsr:@zip-js/zip-js";

const FONTS_MD = join("tokens", "fonts.md");
const FONTS_DIR = join("assets", "fonts");

// Map Inter upstream filenames to required token filenames
const INTER_FILENAME_MAP: Record<string, string> = {
  // Regular
  "Inter-Regular.woff2": "inter-4-normal.woff2",
  "Inter-Regular.ttf": "inter-4-normal.ttf",
  // Medium
  "Inter-Medium.woff2": "inter-5-medium.woff2",
  "Inter-Medium.ttf": "inter-5-medium.ttf",
  // Bold
  "Inter-Bold.woff2": "inter-7-bold.woff2",
  "Inter-Bold.ttf": "inter-7-bold.ttf",
  // Normal Italic
  "Inter-Italic.woff2": "inter-4-normal-italic.woff2",
  "Inter-Italic.ttf": "inter-4-normal-italic.ttf",
  // Medium Italic
  "Inter-MediumItalic.woff2": "inter-5-medium-italic.woff2",
  "Inter-MediumItalic.ttf": "inter-5-medium-italic.ttf",
  // Bold Italic
  "Inter-BoldItalic.woff2": "inter-7-bold-italic.woff2",
  "Inter-BoldItalic.ttf": "inter-7-bold-italic.ttf",
};

// Map JetBrains Mono upstream filenames to required token filenames
const JBM_FILENAME_MAP: Record<string, string> = {
  // Regular
  "JetBrainsMono-Regular.woff2": "jetbrains-mono-4-normal.woff2",
  "JetBrainsMono-Regular.ttf": "jetbrains-mono-4-normal.ttf",
  // Bold
  "JetBrainsMono-Bold.woff2": "jetbrains-mono-7-bold.woff2",
  "JetBrainsMono-Bold.ttf": "jetbrains-mono-7-bold.ttf",
  // Normal Italic
  "JetBrainsMono-Italic.woff2": "jetbrains-mono-4-normal-italic.woff2",
  "JetBrainsMono-Italic.ttf": "jetbrains-mono-4-normal-italic.ttf",
  // Bold Italic
  "JetBrainsMono-BoldItalic.woff2": "jetbrains-mono-7-bold-italic.woff2",
  "JetBrainsMono-BoldItalic.ttf": "jetbrains-mono-7-bold-italic.ttf",
};

async function parseFontTokens() {
  const decoder = new TextDecoder("utf-8");
  const content = decoder.decode(await Deno.readFile(FONTS_MD));
  const lines = content.split("\n");
  const fontRows: string[] = [];
  let inTable = false;
  for (const line of lines) {
    if (line.trim().startsWith("| Font Family")) inTable = true;
    else if (inTable && line.trim().startsWith("|---")) continue;
    else if (inTable && line.trim().startsWith("|")) {
      const cols = line.split("|").map((s: string) => s.trim());
      if (cols.length < 5 || !cols[1]) continue;
      // Font Family, Weight, CSS Weight Mapping, File Example, Description
      const files = cols[4].split(",").map((f: string) => f.trim()).filter(Boolean);
      for (const file of files) {
        if (file.endsWith(".woff2") || file.endsWith(".ttf")) {
          fontRows.push(file);
        }
      }
    } else if (inTable && !line.trim().startsWith("|")) break;
  }
  return fontRows;
}

async function listFontFiles() {
  const files: string[] = [];
  for await (const entry of Deno.readDir(FONTS_DIR)) {
    if (entry.isFile && (entry.name.endsWith(".woff2") || entry.name.endsWith(".ttf"))) {
      files.push(entry.name);
    }
  }
  return files;
}

async function downloadFile(url: string, dest: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download ${url}`);
  const arrayBuffer = await res.arrayBuffer();
  await Deno.writeFile(dest, new Uint8Array(arrayBuffer));
}

async function getLatestInterRelease(): Promise<string> {
  const res = await fetch("https://api.github.com/repos/rsms/inter/releases/latest");
  if (!res.ok) throw new Error("Failed to fetch latest Inter release");
  const data = await res.json();
  // Tag is like "v4.1"
  return data.tag_name.replace(/^v/, "");
}

async function getLatestJetBrainsMonoRelease(): Promise<string> {
  const res = await fetch("https://api.github.com/repos/JetBrains/JetBrainsMono/releases/latest");
  if (!res.ok) throw new Error("Failed to fetch latest JetBrains Mono release");
  const data = await res.json();
  return data.tag_name.replace(/^v/, "");
}

async function unzipFontZip(zipPath: string, destDir: string, filenameMap: Record<string, string>) {
  const zipData = await Deno.readFile(zipPath);
  const reader = new ZipReader(new Uint8ArrayReader(zipData));
  const entries = await reader.getEntries();
  const { Uint8ArrayWriter } = await import("jsr:@zip-js/zip-js");
  for (const entry of entries) {
    if (!entry.directory) {
      if ((entry.filename.endsWith(".woff2") || entry.filename.endsWith(".ttf")) && filenameMap[basename(entry.filename)]) {
        if (typeof entry.getData === "function") {
          const fileData = await entry.getData(new Uint8ArrayWriter());
          const outPath = join(destDir, filenameMap[basename(entry.filename)]);
          await Deno.writeFile(outPath, fileData);
        }
      }
    }
  }
  await reader.close();
}

async function ensureInterFonts() {
  const INTER_RELEASE = await getLatestInterRelease();
  const INTER_ZIP_URL = `https://github.com/rsms/inter/releases/download/v${INTER_RELEASE}/Inter-${INTER_RELEASE}.zip`;
  const INTER_ZIP_PATH = join(FONTS_DIR, `Inter-${INTER_RELEASE}.zip`);
  const interFontFiles = Object.values(INTER_FILENAME_MAP);
  let missing = false;
  for (const f of interFontFiles) {
    try { await Deno.stat(join(FONTS_DIR, f)); } catch { missing = true; break; }
  }
  let downloaded: string[] = [];
  if (missing) {
    await ensureDir(FONTS_DIR);
    await downloadFile(INTER_ZIP_URL, INTER_ZIP_PATH);
    const before = await listFontFiles();
    await unzipFontZip(INTER_ZIP_PATH, FONTS_DIR, INTER_FILENAME_MAP);
    const after = await listFontFiles();
    downloaded = after.filter(f => !before.includes(f));
    try {
      await Deno.remove(INTER_ZIP_PATH);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      console.error(`Failed to remove zip file ${INTER_ZIP_PATH}:`, msg);
    }
  }
  return downloaded;
}

async function ensureJetBrainsMonoFonts() {
  const JBM_RELEASE = await getLatestJetBrainsMonoRelease();
  const JBM_ZIP_URL = `https://github.com/JetBrains/JetBrainsMono/releases/download/v${JBM_RELEASE}/JetBrainsMono-${JBM_RELEASE}.zip`;
  const JBM_ZIP_PATH = join(FONTS_DIR, `JetBrainsMono-${JBM_RELEASE}.zip`);
  const jbmFontFiles = Object.values(JBM_FILENAME_MAP);
  let missing = false;
  for (const f of jbmFontFiles) {
    try { await Deno.stat(join(FONTS_DIR, f)); } catch { missing = true; break; }
  }
  let downloaded: string[] = [];
  if (missing) {
    await ensureDir(FONTS_DIR);
    await downloadFile(JBM_ZIP_URL, JBM_ZIP_PATH);
    const before = await listFontFiles();
    await unzipFontZip(JBM_ZIP_PATH, FONTS_DIR, JBM_FILENAME_MAP);
    const after = await listFontFiles();
    downloaded = after.filter(f => !before.includes(f));
    try {
      await Deno.remove(JBM_ZIP_PATH);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      console.error(`Failed to remove zip file ${JBM_ZIP_PATH}:`, msg);
    }
  }
  return downloaded;
}

async function removeOrphanedFontFiles(tokenFiles: string[], actualFiles: string[]) {
  const orphaned = actualFiles.filter(f => !tokenFiles.includes(f));
  for (const file of orphaned) {
    try {
      await Deno.remove(join(FONTS_DIR, file));
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      console.error(`Failed to remove orphaned file ${file}:`, msg);
    }
  }
}

async function main() {
  const interDownloaded = await ensureInterFonts();
  const jbmDownloaded = await ensureJetBrainsMonoFonts();
  const tokenFiles = await parseFontTokens();
  const actualFiles = await listFontFiles();
  const missing = tokenFiles.filter(f => !actualFiles.includes(f));
  const orphaned = actualFiles.filter(f => !tokenFiles.includes(f));
  if (interDownloaded.length > 0) {
    console.log("Downloaded Inter font files:", interDownloaded);
  }
  if (jbmDownloaded.length > 0) {
    console.log("Downloaded JetBrains Mono font files:", jbmDownloaded);
  }
  if (missing.length > 0) {
    console.error("Missing font files (listed in tokens/fonts.md but not found in /assets/fonts):", missing);
  }
  if (orphaned.length > 0) {
    await removeOrphanedFontFiles(tokenFiles, actualFiles);
  }
  // Always re-check after possible orphan removal
  const actualFilesAfter = await listFontFiles();
  const missingAfter = tokenFiles.filter(f => !actualFilesAfter.includes(f));
  const orphanedAfter = actualFilesAfter.filter(f => !tokenFiles.includes(f));
  if (missingAfter.length === 0 && orphanedAfter.length === 0) {
    console.log("✅ All font files are in sync with tokens/fonts.md.");
  }
}

if (import.meta.main) {
  main();
}
