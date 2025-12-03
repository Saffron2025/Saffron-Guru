import { glob } from "glob";
import sharp from "sharp";
import fs from "fs";
import path from "path";

const folders = ["public/Hero", "public/Products", "public/resources"];
const outputBase = "public/compressed";

for (const folder of folders) {
  const files = await glob(`${folder}/**/*.{jpg,jpeg,png,webp}`);

  for (const file of files) {
    const relativePath = path.relative("public", file);
    const outputPath = path.join(outputBase, relativePath);

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });

    try {
      await sharp(file)
        .webp({ quality: 60 })
        .toFile(outputPath);

      console.log("Compressed:", outputPath);
    } catch (err) {
      console.error("Error compressing:", file, err);
    }
  }
}
