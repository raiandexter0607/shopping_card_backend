"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersDao = void 0;
const users_model_1 = require("./users.model");
class UsersDao {
    async getAll() {
        const usersList = users_model_1.users;
        return usersList;
    }
}
exports.UsersDao = UsersDao;
