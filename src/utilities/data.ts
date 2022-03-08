import sharp from 'sharp'
import fs, { promises } from 'fs'

const read = async (filename : string) => {
  const image = await promises.readFile(process.cwd() + '/images/full/' + filename)
  try {
    const NewImage = await sharp(image).toBuffer()
    return NewImage
  } catch (error) {
    console.log(`An error occurred during processing: ${error}`)
  }
}

const convert = async (filename : string, width : number, height : number) => {
  const image = await promises.readFile(process.cwd() + '/images/full/' + filename)
  const NewImage = await sharp(image).resize(width, height).toBuffer()
  return NewImage
}

const save = async (image : Buffer, name : string, str1 : string, str2 : string) => {
  await fs.createWriteStream(process.cwd() + '/images/full/' + str1 + 'x' + str2 + '/' + name + '.jpg').write(image)
}
export { read, convert, save }
