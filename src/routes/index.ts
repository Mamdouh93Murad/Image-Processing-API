import express from 'express'
import logger from '../utilities/logger'
import images from './routes/images'

const routes = express.Router()

routes.get('/', logger, (req: express.Request, res: express.Response): void => {
  res.send('main page')
})

routes.use('/', images)

export default routes
