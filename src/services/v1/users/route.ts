import { Router } from 'express'
import { UsersController } from './controller'

const app: Router = Router()

const aUsersController = new UsersController()

app.get('/', aUsersController.getAll)

export default app
