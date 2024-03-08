"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route_1 = __importDefault(require("./users/route"));
const app = (0, express_1.Router)();
app.use('/users', route_1.default);
app.use('*', (req, res) => {
    res.sendStatus(404);
});
exports.default = app;
