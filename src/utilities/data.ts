import sharp from 'sharp'
import { promises } from 'fs'
import clc from 'cli-color'
const read = async (filename : string) => {
  const image = await promises.readFile(process.cwd() + '/images/full/' + filename)
  try {
    const NewImage = await sharp(image).toBuffer()
    return NewImage
  } catch (error) {
    console.log(clc.red(`An error occurred during Processing Image: ${error}`))
  }
}

const convert = async (filename : string, width : number, height : number) => {
  const image = await promises.readFile(process.cwd() + '/images/full/' + filename)
  try {
    const NewImage = await sharp(image).resize(width, height).toBuffer()
    return NewImage
  } catch (error) {
    console.log(clc.red(`An error occurred during Image Conversion: ${error}`))
  }
}

const save = async (image : Buffer, name : string, str1 : string, str2 : string) => {
  try {
    await promises.writeFile(process.cwd() + '/images/full/' + str1 + 'x' + str2 + '/' + name + '.jpg', image)
  } catch (error) {
    console.log(clc.red(`An error occurred during Saving Image: ${error}`))
  }
}
export { read, convert, save }
