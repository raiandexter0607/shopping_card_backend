"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersErrors = void 0;
const custom_error_1 = __importDefault(require("../tools/custom-error"));
const logs_constants_1 = require("../constants/logs.constants");
const error_codes_constants_1 = require("../constants/error-codes.constants");
const error_messages_constants_1 = require("../constants/error-messages.constants");
exports.usersErrors = {
    userNotFoundError() {
        return new custom_error_1.default({
            code: error_codes_constants_1.ErrorCodes.RECORD_NOT_FOUND,
            message: error_messages_constants_1.errorMessages.services.users.user_not_found,
            status: 400,
            level: logs_constants_1.LogLevel.EVENT
        });
    }
};
