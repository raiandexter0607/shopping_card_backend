"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app = (0, express_1.Router)();
app.use('*', (req, res) => {
    res.sendStatus(404);
});
exports.default = app;
