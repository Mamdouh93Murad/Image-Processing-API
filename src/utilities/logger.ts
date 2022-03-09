import express from 'express'
import clc from 'cli-color'
const logger = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  const url = req.url
  console.log(clc.green(`ENDPOINT ${url} : visited`))
  next()
}

export default logger
