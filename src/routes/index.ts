import express from 'express'
import logger from '../utilities/logger'
import images from './routes/images'

const routes = express.Router()

routes.get('/', logger, (req: express.Request, res: express.Response): void => {
  const names = {
    1: 'Encenadaport',
    2: 'Fjord ',
    3: 'Iceland WaterFall',
    4: 'Palmtunnel',
    5: 'Santamonica '
  }
  res.write('List of Images Names :' + '\n')
  res.write('1- ' + names[1] + '\n')
  res.write('2- ' + names[2] + '\n')
  res.write('3- ' + names[3] + '\n')
  res.write('4- ' + names[4] + '\n')
  res.write('5- ' + names[5] + '\n')
  res.write(' \n Please enter url in the next form :' + ' /image?name="<NAME>"&width="<NUMBER>"&height="<NUMBER>" \n')
  res.end()
})

routes.use('/', images)

export default routes
