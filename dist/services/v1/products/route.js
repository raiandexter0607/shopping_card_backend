"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const app = (0, express_1.Router)();
const aProductsController = new controller_1.ProductsController();
app.get('/', aProductsController.getAll);
exports.default = app;
