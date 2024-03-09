"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsDao = void 0;
const products_model_1 = require("./products.model");
class ProductsDao {
    async getAll() {
        const productsList = products_model_1.products;
        return productsList;
    }
}
exports.ProductsDao = ProductsDao;
