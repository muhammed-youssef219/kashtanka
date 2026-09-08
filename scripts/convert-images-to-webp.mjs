import { readdir } from 'node:fs/promises'
import { extname, join } from 'node:path'
import sharp from 'sharp'

const sourceDirectory = join('public', 'figma-images', 'photo')
const files = await readdir(sourceDirectory)
const pngFiles = files.filter((file) => extname(file).toLowerCase() === '.png')

await Promise.all(
  pngFiles.map(async (file) => {
    const source = join(sourceDirectory, file)
    const output = join(sourceDirectory, file.replace(/\.png$/i, '.webp'))

    await sharp(source).webp({ quality: 84, effort: 6, smartSubsample: true }).toFile(output)
  }),
)

console.log(`Converted ${pngFiles.length} image assets to WebP.`)
