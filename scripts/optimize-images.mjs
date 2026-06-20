// One-off asset prep script — run with `node scripts/optimize-images.mjs`.
// Resizes/recompresses raw upscaled project PNGs in assets-raw/<slug>/ into
// web-ready JPEGs in public/images/projects/<slug>/, and prints the resulting
// width/height of each so they can be copied into data/projects.ts.
import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import path from "path";

const RAW_ROOT = path.join(process.cwd(), "assets-raw");
const OUT_ROOT = path.join(process.cwd(), "public", "images", "projects");

const COVER_MAX_WIDTH = 1600;
const DETAIL_MAX_WIDTH = 2000;
const QUALITY = 80;

async function processProject(slug) {
  const rawDir = path.join(RAW_ROOT, slug);
  const outDir = path.join(OUT_ROOT, slug);
  await mkdir(outDir, { recursive: true });

  const files = await readdir(rawDir);
  const results = [];

  for (const file of files) {
    if (!file.toLowerCase().endsWith(".png")) continue;
    const isCover = file.toLowerCase() === "kapak.png";
    const maxWidth = isCover ? COVER_MAX_WIDTH : DETAIL_MAX_WIDTH;
    const outName = isCover
      ? "cover.jpg"
      : `${path.basename(file, ".png")}.jpg`;
    const inputPath = path.join(rawDir, file);
    const outputPath = path.join(outDir, outName);

    const image = sharp(inputPath).rotate();
    const metadata = await image.metadata();
    const resizeWidth = Math.min(maxWidth, metadata.width ?? maxWidth);

    const resized = image.resize({ width: resizeWidth, withoutEnlargement: true });
    const info = await resized.jpeg({ quality: QUALITY }).toFile(outputPath);

    results.push({ slug, file: outName, width: info.width, height: info.height });
  }

  return results;
}

async function main() {
  const slugs = await readdir(RAW_ROOT);
  const all = [];
  for (const slug of slugs) {
    all.push(...(await processProject(slug)));
  }
  console.table(all);
}

main();
