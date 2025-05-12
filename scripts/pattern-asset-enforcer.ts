// Enforces that all patterns in tokens/patterns.md are present in assets/patterns/.
// Downloads SVGs and license from heropatterns.com if missing or outdated.
import { join } from "jsr:@std/path";
import { ZipReader, Uint8ArrayReader } from "jsr:@zip-js/zip-js";

const TOKENS_FILE = "tokens/patterns.md";
const ASSETS_DIR = "assets/patterns";
const LICENSE_URL = "https://heropatterns.com/";
const LICENSE_FILE = join(ASSETS_DIR, "heropatterns-license.txt");

async function ensureDir(path: string) {
  try { await Deno.mkdir(path, { recursive: true }); } catch {/* ignore */}
}

async function fetchLicense() {
  // Always check the license type and update if it's CC BY 4.0
  const res = await fetch(LICENSE_URL);
  const html = await res.text();
  const match = html.match(/(CC BY 4\.0|Creative Commons Attribution 4\.0)/i);
  if (match) {
    const licenseText = `Creative Commons Attribution 4.0 International Public License (CC BY 4.0)\n\nBy using the patterns in this directory, you agree to the terms of the Creative Commons Attribution 4.0 International License.\n\nYou are free to:\n- Share — copy and redistribute the material in any medium or format\n- Adapt — remix, transform, and build upon the material for any purpose, even commercially.\n\nUnder the following terms:\n- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.\n- No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.\n\nFull license text: https://creativecommons.org/licenses/by/4.0/legalcode\n\nSource: https://heropatterns.com/\n`;
    await Deno.writeTextFile(LICENSE_FILE, licenseText);
  }
}

async function parsePatterns(): Promise<{slug: string, name: string}[]> {
  const text = await Deno.readTextFile(TOKENS_FILE);
  const lines = text.split("\n").filter(l => l.startsWith("| "));
  return lines.map(line => {
    const cols = line.split("|").map(s => s.trim());
    return { name: cols[1], slug: cols[2] };
  }).filter(p => p.slug && p.slug !== "Slug");
}

async function fetchPattern(slug: string) {
  // Download the zip file for the pattern
  const zipUrl = `https://heropatterns.com/svg/${slug}.zip`;
  const zipPath = join(ASSETS_DIR, `${slug}.zip`);
  const extractDir = join(ASSETS_DIR, `${slug}-zip`);
  // Download zip
  const res = await fetch(zipUrl);
  if (!res.ok) throw new Error(`Failed to download ${zipUrl}`);
  const arrayBuffer = await res.arrayBuffer();
  await Deno.writeFile(zipPath, new Uint8Array(arrayBuffer));
  // Extract zip using zip-js (cross-platform)
  const zipData = await Deno.readFile(zipPath);
  const reader = new ZipReader(new Uint8ArrayReader(zipData));
  const entries = await reader.getEntries();
  for (const entry of entries) {
    if (!entry.directory && entry.filename.endsWith('.svg')) {
      if (typeof entry.getData === "function") {
        const { Uint8ArrayWriter } = await import("jsr:@zip-js/zip-js");
        const fileData = await entry.getData(new Uint8ArrayWriter());
        const outPath = join(extractDir, entry.filename.split(/[\\/]/).pop()!);
        await ensureDir(extractDir);
        await Deno.writeFile(outPath, fileData);
      }
    }
  }
  await reader.close();
  // Find the SVG file
  let svgPath = join(extractDir, `${slug}.svg`);
  try {
    await Deno.stat(svgPath);
  } catch {
    // Fallback: check for any .svg file in extractDir
    for await (const entry of Deno.readDir(extractDir)) {
      if (entry.isFile && entry.name.endsWith('.svg')) {
        svgPath = join(extractDir, entry.name);
        break;
      }
    }
  }
  // Copy SVG to assets dir
  const svgData = await Deno.readTextFile(svgPath);
  await Deno.writeTextFile(join(ASSETS_DIR, `${slug}.svg`), svgData);
  // Cleanup
  try { await Deno.remove(zipPath); } catch (_e) {/* ignore */}
  try { await Deno.remove(extractDir, { recursive: true }); } catch (_e) {/* ignore */}
}

async function enforcePatterns() {
  await ensureDir(ASSETS_DIR);
  await fetchLicense();
  const patterns = await parsePatterns();
  for (const {slug} of patterns) {
    const file = join(ASSETS_DIR, `${slug}.svg`);
    try { await Deno.stat(file); }
    catch { await fetchPattern(slug); }
  }
  // Remove orphaned SVGs
  for await (const entry of Deno.readDir(ASSETS_DIR)) {
    if (entry.isFile && entry.name.endsWith(".svg")) {
      const slug = entry.name.replace(/\.svg$/, "");
      if (!patterns.some(p => p.slug === slug)) {
        await Deno.remove(join(ASSETS_DIR, entry.name));
      }
    }
  }
  console.log("✅ Pattern assets enforced.");
}

if (import.meta.main) {
  await enforcePatterns();
}
