"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const products_error_1 = require("../../../libraries/errors/products.error");
const products_dao_1 = require("../../../models/products/products.dao");
class ProductsService {
    async getAll() {
        const aProductsDao = new products_dao_1.ProductsDao();
        const products = await aProductsDao.getAll();
        if ((products === null || products === void 0 ? void 0 : products.length) === 0) {
            throw products_error_1.productsErrors.productNotFoundError();
        }
        return products;
    }
}
exports.ProductsService = ProductsService;
