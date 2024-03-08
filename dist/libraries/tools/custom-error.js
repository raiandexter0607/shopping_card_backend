"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorResponse extends Error {
    constructor({ code, message, status = 500 }) {
        super(message);
        this.code = code;
        this.status = status;
        this.message = message;
        Error.captureStackTrace(this);
    }
    getErrorResponse() {
        return {
            message: this.message,
            code: this.code
        };
    }
}
exports.default = ErrorResponse;
