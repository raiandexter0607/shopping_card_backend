import { Router } from 'express'
import users from './users/route'

const app: Router = Router()

app.use('/users', users)

app.use('*', (req, res) => {
  res.sendStatus(404)
})

export default app
