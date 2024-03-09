import { Router } from 'express'
import { ProductsController } from './controller'

const app: Router = Router()

const aProductsController = new ProductsController()

app.get('/', aProductsController.getAll)

export default app