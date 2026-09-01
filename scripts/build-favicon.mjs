import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SRC = process.argv[2];
const OUT_DIR = process.argv[3] ?? "src/app";
const SCALE = Number(process.argv[4] ?? 1.15);
const CROP_HEIGHT = Number(process.argv[5] ?? 102);

function lum(r, g, b) {
  return r * 0.299 + g * 0.587 + b * 0.114;
}

function isSymbolPixel(r, g, b, a, y) {
  return a > 200 && lum(r, g, b) > 200 && r > 180 && y >= 45 && y <= 72;
}

async function main() {
  const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({
    resolveWithObject: true,
  });

  const { width, height, channels } = info;
  const pixels = Buffer.from(data);

  let xmin = width;
  let xmax = 0;
  let ymin = height;
  let ymax = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (width * y + x) * channels;
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      const a = pixels[i + 3];

      if (isSymbolPixel(r, g, b, a, y)) {
        xmin = Math.min(xmin, x);
        xmax = Math.max(xmax, x);
        ymin = Math.min(ymin, y);
        ymax = Math.max(ymax, y);
      }
    }
  }

  const cx = (xmin + xmax) / 2;
  const cy = (ymin + ymax) / 2;
  const symbol = [];

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (width * y + x) * channels;
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      const a = pixels[i + 3];

      if (isSymbolPixel(r, g, b, a, y)) {
        symbol.push({ x, y, r, g, b, a });
        pixels[i] = 46;
        pixels[i + 1] = 26;
        pixels[i + 2] = 71;
        pixels[i + 3] = 255;
      }
    }
  }

  for (const point of symbol) {
    const dx = Math.round((point.x - cx) * SCALE + cx);
    const dy = Math.round((point.y - cy) * SCALE + cy);
    if (dx < 0 || dy < 0 || dx >= width || dy >= height) continue;

    const i = (width * dy + dx) * channels;
    pixels[i] = point.r;
    pixels[i + 1] = point.g;
    pixels[i + 2] = point.b;
    pixels[i + 3] = point.a;
  }

  const size = Math.min(width, CROP_HEIGHT);
  const cropped = await sharp(pixels, { raw: { width, height, channels } })
    .extract({ left: 0, top: 0, width: size, height: size })
    .resize(512, 512, { kernel: "lanczos3" })
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(OUT_DIR, "icon.png"), cropped);
  fs.writeFileSync(path.join(OUT_DIR, "apple-icon.png"), cropped);

  console.log(`Favicon generado en ${OUT_DIR} (symbols x${SCALE})`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
