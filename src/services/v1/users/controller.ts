import { type RequestHandler } from 'express'

import { UsersService } from './index'

export class UsersController {
  getAll: RequestHandler = async (req, res, next) => {
    try {
      const aUsersService = new UsersService()
      const response = await aUsersService.getAll()
      return res.status(200).json({ data: response })
    } catch (error) {
      next(error)
    }
  }
}
