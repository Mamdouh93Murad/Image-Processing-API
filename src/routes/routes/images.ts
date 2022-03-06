import express from 'express'
import logger from '../../utilities/logger'
const images = express.Router()

images.get('/image', logger, (req: express.Request, res: express.Response): void => {
  res.send('CONVERTING')
})

export default images
