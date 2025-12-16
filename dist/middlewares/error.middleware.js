"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = errorMiddleware;
const env_1 = require("../config/env");
function errorMiddleware(err, _req, res, _next) {
    console.error(err);
    res.status(500).json({
        message: "Internal Server Error",
        ...(env_1.env.nodeEnv === "development" && { stack: err.stack }),
    });
}
