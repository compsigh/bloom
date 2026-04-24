import { readdirSync } from "node:fs"
import { output, processImage, resize } from "@thi.ng/imago"

const srcDir = "public/assets/pics-from-2025"
const outDir = "public/assets/pics-from-2025-pixelated"

const SRC_W = 1280
const SRC_H = 854

const BLOCK_SIZE = 16
const TARGET_WIDTH = 600

// Snap to clean math: every output pixel is exactly BLOCK_SIZE × BLOCK_SIZE
const SMALL_W = Math.round(TARGET_WIDTH / BLOCK_SIZE)
const SMALL_H = Math.round((SMALL_W * SRC_H) / SRC_W)
const FINAL_W = SMALL_W * BLOCK_SIZE
const FINAL_H = SMALL_H * BLOCK_SIZE

const files = readdirSync(srcDir).filter((f: string) =>
  /\.(jpe?g|png)$/i.test(f)
)

for (const file of files) {
  const name = file.replace(/\.[^.]+$/, "")
  await processImage(
    `${srcDir}/${file}`,
    [
      resize({ size: [SMALL_W, SMALL_H] }),
      resize({ size: [FINAL_W, FINAL_H], filter: "nearest" }),
      output({ id: "pixelated", path: `${name}.png` })
    ],
    { outDir }
  )
  console.log(
    `Pixelated ${file} → ${FINAL_W}×${FINAL_H} (${SMALL_W}×${SMALL_H} blocks)`
  )
}
