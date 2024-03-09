import { Router } from 'express'
import users from './users/route'
import products from './products/route'

const app: Router = Router()

app.use('/users', users)
app.use('/products', products)

app.use('*', (req, res) => {
  res.sendStatus(404)
})

export default app
