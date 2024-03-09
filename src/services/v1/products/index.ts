import { IProducts } from "@interfaces/IProducts";
import { productsErrors } from '@errors/products.error'
import { ProductsDao } from '@models/products/products.dao'
export class ProductsService {
    async getAll(): Promise<IProducts[]> {
        const aProductsDao = new ProductsDao()

        const products = await aProductsDao.getAll()

        if (products?.length === 0) {
            throw productsErrors.productNotFoundError()
        }

        return products
    }
}