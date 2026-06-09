const sharp = require("sharp");
const path = require("path");

const inputPath = path.join(__dirname, "public", "logo_gold.png");
const outputPath = path.join(__dirname, "public", "logo_gold_transparent.png");

async function processImage() {
  try {
    // We want to make all dark pixels transparent.
    // Instead of looping pixels in JS, we can use sharp's threshold and boolean operations,
    // or just read raw pixels, modify them, and write back.

    const { data, info } = await sharp(inputPath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      // If the pixel is very dark (close to black), make it transparent
      if (r < 30 && g < 30 && b < 30) {
        data[i + 3] = 0; // Alpha to 0
      } else {
        // Optional: soften the edge blending by setting alpha based on brightness
        // For gold pixels, keep them mostly opaque.
      }
    }

    await sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4,
      },
    })
      .png()
      .toFile(outputPath);

    console.log("Image processed successfully!");
  } catch (error) {
    console.error("Error processing image:", error);
  }
}

processImage();
