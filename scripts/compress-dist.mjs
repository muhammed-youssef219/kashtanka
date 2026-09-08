import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { brotliCompress, gzip } from 'node:zlib'
import { promisify } from 'node:util'

const gzipAsync = promisify(gzip)
const brotliAsync = promisify(brotliCompress)

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const filePath = join(directory, entry.name)
      return entry.isDirectory() ? collectFiles(filePath) : [filePath]
    }),
  )

  return files.flat()
}

const files = await collectFiles('dist')
const compressibleFiles = files.filter((file) => /\.(?:css|js)$/i.test(file))

await Promise.all(
  compressibleFiles.flatMap(async (file) => {
    const contents = await readFile(file)
    await Promise.all([
      writeFile(`${file}.gz`, await gzipAsync(contents, { level: 9 })),
      writeFile(`${file}.br`, await brotliAsync(contents)),
    ])
  }),
)

console.log(`Generated gzip and Brotli files for ${compressibleFiles.length} CSS/JS assets.`)
