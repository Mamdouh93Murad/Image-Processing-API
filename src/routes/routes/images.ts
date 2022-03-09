import express from 'express'
import logger from '../../utilities/logger'
import promises from 'fs'
import { convert, save } from '../../utilities/data'
import clc from 'cli-color'
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
          console.error(clc.red('FILE DOES NOT EXIST, WRONG IMAGE NAME'))
        }
      }

      if (names.includes(name)) {
        if ((width !== undefined && isNaN(parseInt(width)) === true) || (height !== undefined && isNaN(parseInt(height)) === true) || parseInt(width) < 1 || parseInt(height) < 1) {
          res.send('Size Can not be Negative, Zero, String or NaN. Please Insert Positive Number')
          console.error(clc.red('Size Can not be Negative, Zero, String or NaN. Please Insert Positive Number'))
        } else {
          // eslint-disable-next-line node/no-deprecated-api
          if (promises.existsSync(process.cwd() + '/images/full/' + name + '.jpg')) {
            const str1 : string = width
            const str2 : string = height
            if (!promises.existsSync(process.cwd() + '/images/full/' + str1 + 'x' + str2) && (isNaN(parseInt(width)) === false || isNaN(parseInt(height)) === false)) {
              await promises.mkdir(process.cwd() + '/images/full/' + str1 + 'x' + str2, () => { console.log(clc.green(' FOLDER CREATED')) })
            }
            if ((!promises.existsSync(process.cwd() + '/images/full/' + str1 + 'x' + str2 + '/' + name + '.jpg')) && (isNaN(parseInt(width)) === false && isNaN(parseInt(height)) === false)) {
              const image = await convert(name + '.jpg', parseInt(width), parseInt(height)) as Buffer
              await save(image, name, str1, str2)
              console.log(clc.green(' IMAGE CREATED AND SAVED'))
            }
            if (str1 === undefined || str2 === undefined) {
              const file = process.cwd() + '/images/full/' + name + '.jpg'
              res.sendFile(file)
            } else {
              const file = await process.cwd() + '/images/full/' + str1 + 'x' + str2 + '/' + name + '.jpg'
              res.sendFile(file)
            }
          }
        }
      } else {
        res.send('FILE DOES NOT EXIST, WRONG IMAGE NAME')
        console.error(clc.red('FILE DOES NOT EXIST, WRONG IMAGE NAME'))
      }
    } else {
      res.send('Please Specify Image name and Optionally Width and Height Value')
    }
  })

export default images
