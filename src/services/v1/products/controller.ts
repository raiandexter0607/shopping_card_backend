import { type RequestHandler } from 'express'

import { ProductsService } from './index'

export class ProductsController {
    getAll: RequestHandler = async (req, res, next) => {
        try {
            const aProductsService = new ProductsService()
            const response = await aProductsService.getAll()
            return res.status(200).json({ data: response })
        } catch (error) {
            next(error)
        }
    }
}