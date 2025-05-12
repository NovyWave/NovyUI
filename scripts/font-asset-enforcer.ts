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
  // Italic Regular
  "Inter-Italic.woff2": "inter-4-italic-normal.woff2",
  "Inter-Italic.ttf": "inter-4-italic-normal.ttf",
  // Italic Medium
  "Inter-MediumItalic.woff2": "inter-5-italic-medium.woff2",
  "Inter-MediumItalic.ttf": "inter-5-italic-medium.ttf",
  // Italic Bold
  "Inter-BoldItalic.woff2": "inter-7-italic-bold.woff2",
  "Inter-BoldItalic.ttf": "inter-7-italic-bold.ttf",
};

// Map FiraCode upstream filenames to required token filenames
const FIRECODE_FILENAME_MAP: Record<string, string> = {
  // Regular
  "FiraCode-Regular.woff2": "firacode-4-normal.woff2",
  "FiraCode-Regular.ttf": "firacode-4-normal.ttf",
  // Bold
  "FiraCode-Bold.woff2": "firacode-7-bold.woff2",
  "FiraCode-Bold.ttf": "firacode-7-bold.ttf",
};

// Audiowide font enforcement (Google Fonts official)
const AUDIOWIDE_FILENAME_MAP: Record<string, string> = {
  "Audiowide-Regular.ttf": "audiowide-4-normal.ttf",
  "Audiowide-Regular.woff2": "audiowide-4-normal.woff2",
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
      if (cols.length < 5) continue;
      // Always parse the File Example column (index 4) for every row in the table
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

async function getLatestFiraCodeRelease(): Promise<string> {
  const res = await fetch("https://api.github.com/repos/tonsky/FiraCode/releases/latest");
  if (!res.ok) throw new Error("Failed to fetch latest FiraCode release");
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

async function unzipFontZipSelective(zipPath: string, destDir: string, filenameMap: Record<string, string>) {
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
  if (missing) {
    await ensureDir(FONTS_DIR);
    await downloadFile(INTER_ZIP_URL, INTER_ZIP_PATH);
    await unzipFontZipSelective(INTER_ZIP_PATH, FONTS_DIR, INTER_FILENAME_MAP);
    try {
      await Deno.remove(INTER_ZIP_PATH);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      console.error(`Failed to remove zip file ${INTER_ZIP_PATH}:`, msg);
    }
  }
}

async function ensureFiraCodeFonts() {
  const FIRECODE_RELEASE = await getLatestFiraCodeRelease();
  const FIRECODE_ZIP_URL = `https://github.com/tonsky/FiraCode/releases/download/${FIRECODE_RELEASE}/Fira_Code_v${FIRECODE_RELEASE}.zip`;
  const FIRECODE_ZIP_PATH = join(FONTS_DIR, `FiraCode-${FIRECODE_RELEASE}.zip`);
  const firecodeFontFiles = Object.values(FIRECODE_FILENAME_MAP);
  let missing = false;
  for (const f of firecodeFontFiles) {
    try { await Deno.stat(join(FONTS_DIR, f)); } catch { missing = true; break; }
  }
  if (missing) {
    await ensureDir(FONTS_DIR);
    await downloadFile(FIRECODE_ZIP_URL, FIRECODE_ZIP_PATH);
    await unzipFontZip(FIRECODE_ZIP_PATH, FONTS_DIR, FIRECODE_FILENAME_MAP);
    try {
      await Deno.remove(FIRECODE_ZIP_PATH);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      console.error(`Failed to remove zip file ${FIRECODE_ZIP_PATH}:`, msg);
    }
  }
}

async function ensureAudiowideFonts() {
  // Google Fonts official repo for TTF, direct WOFF2 from fonts.gstatic.com
  const TTF_URL = "https://github.com/google/fonts/raw/main/ofl/audiowide/Audiowide-Regular.ttf";
  const WOFF2_URL = "https://fonts.gstatic.com/s/audiowide/v24/l7gdbjpo0cum0ckerWCdmA.woff2";
  const ttfPath = join(FONTS_DIR, AUDIOWIDE_FILENAME_MAP["Audiowide-Regular.ttf"]);
  const woff2Path = join(FONTS_DIR, AUDIOWIDE_FILENAME_MAP["Audiowide-Regular.woff2"]);
  let missing = false;
  try { await Deno.stat(ttfPath); } catch { missing = true; }
  try { await Deno.stat(woff2Path); } catch { missing = true; }
  if (missing) {
    await ensureDir(FONTS_DIR);
    await downloadFile(TTF_URL, ttfPath);
    await downloadFile(WOFF2_URL, woff2Path);
  }
}

async function ensureFontLicenses() {
  // Download OFL license for each font family if not present
  const licenses = [
    {
      url: "https://github.com/google/fonts/raw/main/ofl/audiowide/OFL.txt",
      dest: join(FONTS_DIR, "audiowide-license.txt"),
    },
    {
      url: "https://github.com/rsms/inter/raw/main/OFL.txt",
      dest: join(FONTS_DIR, "inter-license.txt"),
    },
    {
      url: "https://github.com/tonsky/FiraCode/raw/master/OFL.txt",
      dest: join(FONTS_DIR, "firacode-license.txt"),
    },
  ];
  for (const lic of licenses) {
    try { await Deno.stat(lic.dest); } catch { await downloadFile(lic.url, lic.dest); }
  }
}

async function main() {
  await ensureInterFonts();
  await ensureFiraCodeFonts();
  await ensureAudiowideFonts();
  await ensureFontLicenses();
  const tokenFiles = await parseFontTokens();
  const actualFiles = await listFontFiles();
  const missing = tokenFiles.filter(f => !actualFiles.includes(f));
  const orphaned = actualFiles.filter(f => !tokenFiles.includes(f));
  if (missing.length > 0) {
    console.error("Missing font files (listed in tokens/fonts.md but not found in /assets/fonts):", missing);
    Deno.exit(1);
  }
  if (orphaned.length > 0) {
    console.error("Orphaned font files (found in /assets/fonts but not listed in tokens/fonts.md):", orphaned);
    Deno.exit(1);
  }
  // Final check
  const finalFiles = await listFontFiles();
  const finalMissing = tokenFiles.filter(f => !finalFiles.includes(f));
  const finalOrphaned = finalFiles.filter(f => !tokenFiles.includes(f));
  if (finalMissing.length === 0 && finalOrphaned.length === 0) {
    console.log("✅ All font files are in sync with tokens/fonts.md.");
  } else {
    if (finalMissing.length > 0) {
      console.error("Missing font files (final check):", finalMissing);
    }
    if (finalOrphaned.length > 0) {
      console.error("Orphaned font files (final check):", finalOrphaned);
    }
    Deno.exit(1);
  }
}

if (import.meta.main) {
  main();
}
