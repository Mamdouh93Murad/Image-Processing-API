import express from 'express'
import logger from '../utilities/logger'
const routes = express.Router()

routes.get('/', logger, (req: express.Request, res: express.Response): void => {
  res.send('main page')
})

export default routes
