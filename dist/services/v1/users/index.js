"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const users_error_1 = require("../../../libraries/errors/users.error");
const users_dao_1 = require("../../../models/users/users.dao");
class UsersService {
    async getAll() {
        const aUsersDao = new users_dao_1.UsersDao();
        const users = await aUsersDao.getAll();
        if ((users === null || users === void 0 ? void 0 : users.length) === 0) {
            throw users_error_1.usersErrors.userNotFoundError();
        }
        return users;
    }
}
exports.UsersService = UsersService;
