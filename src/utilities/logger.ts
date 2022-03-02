import express from 'express'

const logger = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  const url = req.url
  console.log(`${url} visited`)
  next()
}

export default logger
