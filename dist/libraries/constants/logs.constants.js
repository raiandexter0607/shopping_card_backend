"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevel = exports.LogStatus = void 0;
var LogStatus;
(function (LogStatus) {
    LogStatus["SUCCESS"] = "success";
    LogStatus["FAILURE"] = "failure";
})(LogStatus || (exports.LogStatus = LogStatus = {}));
var LogLevel;
(function (LogLevel) {
    LogLevel["EVENT"] = "event";
    LogLevel["DEV"] = "dev";
    LogLevel["TOP"] = "top";
    LogLevel["CUSTOMER"] = "customer";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
