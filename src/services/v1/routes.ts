import { Router } from 'express'

const app: Router = Router()

app.use('*', (req, res) => {
  res.sendStatus(404)
})

export default app
