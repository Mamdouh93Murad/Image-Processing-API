import express from 'express'
import routes from './routes/index'
// import data from './utilities/data'
import clc from 'cli-color'
const app = express()
const port = 3000

// data('fjord.jpg')
app.use('/', routes)

// start the Express server
app.listen(port, (): void => {
  console.log(clc.green(`server started at http://localhost:${port}`))
})

export default app
