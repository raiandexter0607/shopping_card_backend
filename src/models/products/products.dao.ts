import { type IProducts } from "@interfaces/IProducts";
import { products } from "./products.model";

export class ProductsDao {
  async getAll (): Promise<IProducts[]> {
    const productsList: IProducts[] = products
    return productsList
  }
}