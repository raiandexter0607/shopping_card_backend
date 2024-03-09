"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const index_1 = require("./index");
class ProductsController {
    constructor() {
        this.getAll = async (req, res, next) => {
            try {
                const aProductsService = new index_1.ProductsService();
                const response = await aProductsService.getAll();
                return res.status(200).json({ data: response });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.ProductsController = ProductsController;
