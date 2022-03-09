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
    const width : string = req.query.width as unknown as string
    const height : string = req.query.height as unknown as string
    if (name !== undefined) {
      if (isNaN(parseInt(width)) === true && isNaN(parseInt(height)) === true) {
        if (names.includes(name)) {
          if (promises.existsSync(process.cwd() + '/images/full/' + name + '.jpg')) {
            const file = process.cwd() + '/images/full/' + name + '.jpg'
            res.sendFile(file)
          }
          // eslint-disable-next-line no-empty
        } else {
          res.send('FILE DOES NOT EXIST, WRONG IMAGE NAME')
          console.error('FILE DOES NOT EXIST, WRONG IMAGE NAME')
        }
      }

      if (names.includes(name)) {
        if ((width !== undefined && isNaN(parseInt(width))) === true || (height !== undefined && isNaN(parseInt(height)) === true) || parseInt(width) < 0 || parseInt(height) < 0) {
          res.send('Size Can not be Negative, string or Nan, please insert positive number')
          console.error('Size Can not be Negative, string or Nan, please insert positive number')
        } else {
          // eslint-disable-next-line node/no-deprecated-api
          if (promises.existsSync(process.cwd() + '/images/full/' + name + '.jpg')) {
            const str1 : string = width
            const str2 : string = height
            if (!promises.existsSync(process.cwd() + '/images/full/' + str1 + 'x' + str2) && (isNaN(parseInt(width)) === false || isNaN(parseInt(height)) === false)) {
              await promises.mkdir(process.cwd() + '/images/full/' + str1 + 'x' + str2, () => { console.log('CREATED') })
            }
            if (!promises.existsSync(process.cwd() + '/images/full/' + str1 + 'x' + str2 + '/' + name + '.jpg')) {
              const image = await convert(name + '.jpg', parseInt(width), parseInt(height))
              await save(image, name, str1, str2)
            }
            const file = process.cwd() + '/images/full/' + str1 + 'x' + str2 + '/' + name + '.jpg'
            res.sendFile(file)
          }
        }
      } else {
        res.send('FILE DOES NOT EXIST, WRONG IMAGE NAME')
        console.error('FILE DOES NOT EXIST, WRONG IMAGE NAME')
      }
    } else {
      res.send('Please Specify Image name and Optionally Width and Height Value')
    }
  })

export default images
