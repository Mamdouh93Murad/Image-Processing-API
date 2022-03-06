import app from '../..'
import supertest from 'supertest'
import { promises } from 'fs'
import sharp from 'sharp'
import data from '../../utilities/data'
const request = supertest(app)

const test = data('fjord.jpg')
console.log(test)
// eslint-disable-next-line no-undef
describe('Test "Image" End Point', (): void => {
  // eslint-disable-next-line no-undef
  it('Gets Status of The End Point', async (done: DoneFn): Promise<void> => {
    const response = await request.get('/image')
    // eslint-disable-next-line no-undef
    expect(response.status).toBe(200)
    done()
  })
  // eslint-disable-next-line no-undef
  it('Test The Return Object/Extention of "Images" End Point', async () => {
    const image = await promises.readFile('../../MEAN/DEFAULT/images/full/fjord.jpg')
    const metadata = await sharp(image).metadata()
    // eslint-disable-next-line no-undef
    expect(metadata.format).toBe('jpeg')
  })
})

// eslint-disable-next-line no-undef
describe('Image Functions', () : void => {
  // eslint-disable-next-line no-undef
  it('Returns the Width and Height of an Image', async () => {
    // eslint-disable-next-line no-undef
    const image = await promises.readFile('../../MEAN/DEFAULT/images/full/fjord.jpg')
    const metadata = await sharp(image).metadata()
    const width : number = metadata.width as number
    const height : number = metadata.height as number
    // eslint-disable-next-line no-undef
    expect(width).toBe(1920)
    // eslint-disable-next-line no-undef
    expect(height).toBe(1280)
  })

  // eslint-disable-next-line no-undef
  it('Properly Resizes Image and Return Correct Width and Height', async () => {
    // eslint-disable-next-line no-undef
    const image = await promises.readFile('../../MEAN/DEFAULT/images/full/fjord.jpg')
    // eslint-disable-next-line camelcase
    const new_image = await sharp(image).resize(300, 300).toBuffer()
    const metadata = await sharp(new_image).metadata()
    const width : number = metadata.width as number
    const height : number = metadata.height as number
    // eslint-disable-next-line no-undef
    expect(width).toBe(300)
    // eslint-disable-next-line no-undef
    expect(height).toBe(300)
  })
})
