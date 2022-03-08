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
    if (name !== undefined) {
      if (width === undefined) {
        if (names.includes(name)) {
          if (promises.existsSync(process.cwd() + '/images/full/' + name + '.jpg')) {
            const file = process.cwd() + '/images/full/' + name + '.jpg'
            res.sendFile(file)
          }
        // eslint-disable-next-line no-empty
        } else {
          res.send('FILE DOES NOT EXIST, WRONG IMAGE NAME')
        }
      } else {
        if (names.includes(name)) {
          if (width < 0 || height < 0) {
            res.send('Size Can not be Negative, please insert positive number')
          } else {
            // eslint-disable-next-line node/no-deprecated-api
            if (promises.existsSync(process.cwd() + '/images/full/' + name + '.jpg')) {
              const str1 : string = width as unknown as string
              const str2 : string = height as unknown as string
              if (!promises.existsSync(process.cwd() + '/images/full/' + str1 + 'x' + str2)) {
                await promises.mkdir(process.cwd() + '/images/full/' + str1 + 'x' + str2, () => { console.log('CREATED') })
              }
              if (!promises.existsSync(process.cwd() + '/images/full/' + str1 + 'x' + str2 + '/' + name + '.jpg')) {
                width = await Number(width)
                height = await Number(height)
                const image = await convert(name + '.jpg', width, height)
                await save(image, name, str1, str2)
              }
              const file = process.cwd() + '/images/full/' + str1 + 'x' + str2 + '/' + name + '.jpg'
              res.sendFile(file)
            }
          }
        } else {
          res.send('FILE DOES NOT EXIST, WRONG IMAGE NAME')
        }
      }
    } else {
      res.send('Please Specify Image name and Optionally Width and Height Value')
    }
  })

export default images
