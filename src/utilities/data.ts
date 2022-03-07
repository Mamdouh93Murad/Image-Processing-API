import sharp from 'sharp'
import { promises } from 'fs'

const read = async (filename : string) => {
  const image = await promises.readFile('../../MEAN/DEFAULT/images/full/' + filename)
  try {
    const NewImage = await sharp(image).toBuffer()
    return NewImage
  } catch (error) {
    console.log(`An error occurred during processing: ${error}`)
  }
}

const convert = async (filename : string) => {
  const image = await promises.readFile('../../MEAN/DEFAULT/images/full/' + filename)
  const NewImage = await sharp(image).resize(300, 300).toBuffer()
  return NewImage
}

export { read, convert }
