import sharp from 'sharp'
import { promises } from 'fs'

const data = async (filename : string) => {
  const image = await promises.readFile('../../MEAN/DEFAULT/images/full/' + filename)
  let width : number
  let height : number
  try {
    const metadata = await sharp(image).metadata()
    width = metadata.width as number
    height = metadata.height as number
    // console.log(width, height)
    return [width, height]
  } catch (error) {
    console.log(`An error occurred during processing: ${error}`)
  }
}

export default data
