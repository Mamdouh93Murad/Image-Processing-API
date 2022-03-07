import express from 'express'
import logger from '../../utilities/logger'
import promises from 'fs'
import { convert, save } from '../../utilities/data'

const images = express.Router()
const names = ['encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', 'santamonica']
images.get(
  '/image',
  logger,
  async (req: express.Request, res: express.Response): Promise<void> => {
    const name : string = req.query.name as string
    let width : number = req.query.width as unknown as number
    let height : number = req.query.height as unknown as number
    if (width === undefined) {
      if (names.includes(name)) {
        if (promises.existsSync(process.cwd() + '/images/full/' + name + '.jpg')) {
          const file = process.cwd() + '/images/full/' + name + '.jpg'
          res.sendFile(file)
        }
      }
    } else {
      if (names.includes(name)) {
        // eslint-disable-next-line node/no-deprecated-api
        if (promises.existsSync(process.cwd() + '/images/full/' + name + '.jpg')) {
          const folder : string = width as unknown as string
          if (!promises.existsSync(process.cwd() + '/images/full/' + folder)) {
            await promises.mkdir(process.cwd() + '/images/full/' + folder, () => { console.log('CREATED') })
          }
          if (!promises.existsSync(process.cwd() + '/images/full/' + folder + '/' + name + '.jpg')) {
            width = await Number(width)
            height = await Number(height)
            const image = await convert(name + '.jpg', width, height)
            await save(image, name, folder)
          }
          const file = process.cwd() + '/images/full/' + folder + '/' + name + '.jpg'
          res.sendFile(file)
        }
      } else {
        res.send('FILE DOES NOT EXIST, WRONG IMAGE NAME')
      }
    }
  }
)

export default images
