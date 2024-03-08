"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const index_1 = require("./index");
class UsersController {
    constructor() {
        this.getAll = async (req, res, next) => {
            try {
                const aUsersService = new index_1.UsersService();
                const response = await aUsersService.getAll();
                return res.status(200).json({ data: response });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.UsersController = UsersController;
