import bodyParser from 'body-parser'
import cors from 'cors'
import express, { type Request, type Response } from 'express'
import helmet from 'helmet'

import apiV1 from '@services/v1/routes'

const app: express.Application = express()

app.use(cors())
app.use(helmet())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// eslint-disable-next-line @typescript-eslint/ban-types
app.use((req: Request, res: Response, next: Function) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  )
  return next()
})

app.use('/api/v1', apiV1)
app.use('/health-check', (req, res) => res.sendStatus(200))

app.use('*', (req, res) => {
  res.sendStatus(404)
})

export default app
