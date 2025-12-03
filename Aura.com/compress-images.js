import { globby } from "globby";
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";

async function compressAll() {
  console.log("⏳ Compressing images...");

  const files = await globby([
    "public/Hero/**/*.{jpg,jpeg,png,webp}",
    "public/Products/**/*.{jpg,jpeg,png,webp}",
    "public/resources/**/*.{jpg,jpeg,png,webp}"
  ]);

  await imagemin(files, {
    destination: "public",
    plugins: [
      imageminWebp({ quality: 70 }),
      imageminMozjpeg({ quality: 65 }),
      imageminPngquant({ quality: [0.5, 0.6] })
    ]
  });

  console.log("✅ ALL IMAGES COMPRESSED SUCCESSFULLY!");
}

compressAll();
