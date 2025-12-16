"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundMiddleware = notFoundMiddleware;
function notFoundMiddleware(_req, res, _next) {
    res.status(404).json({ message: "Route not found" });
}
