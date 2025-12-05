import { globby } from "globby";
import sharp from "sharp";
import fs from "fs";
import path from "path";

async function compressHero() {
  console.log("⏳ Compressing Hero folder images...");

  const files = await globby([
    "public/Hero/**/*.{jpg,jpeg,png,webp}"
  ]);

  for (const file of files) {
    try {
      const dirname = path.dirname(file);
      const filenameWithoutExt = path.basename(file).split('.')[0];
      const tempOutput = path.join(dirname, filenameWithoutExt + "_compressed.webp");
      const finalOutput = path.join(dirname, filenameWithoutExt + ".webp");

      // 1️⃣ Convert to WebP (temp file)
      await sharp(file)
        .webp({ quality: 60 })
        .toFile(tempOutput);

      // 2️⃣ Remove old file
      fs.unlinkSync(file);

      // 3️⃣ Rename compressed file to final name
      fs.renameSync(tempOutput, finalOutput);

      console.log("✔ Compressed:", finalOutput);

    } catch (err) {
      console.error("❌ Error with:", file, err);
    }
  }

  console.log("🎉 DONE! Hero folder fully optimized.");
}

compressHero();
