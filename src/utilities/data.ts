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

const save = (image : Buffer, name : string, folder : string) => {
  fs.createWriteStream(process.cwd() + '/images/full/' + folder + '/' + name + '.jpg').write(image)
}
export { read, convert, save }
