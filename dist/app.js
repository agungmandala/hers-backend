"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// src/app.ts
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const routes_1 = __importDefault(require("./routes"));
const error_middleware_1 = require("./middlewares/error.middleware");
const not_found_middleware_1 = require("./middlewares/not-found.middleware");
exports.app = (0, express_1.default)();
// Body parser
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use((0, helmet_1.default)());
exports.app.use((0, cors_1.default)());
exports.app.use((0, compression_1.default)());
// Routes
exports.app.use("/api", routes_1.default);
// 404 handler
exports.app.use(not_found_middleware_1.notFoundMiddleware);
// Error handler (HARUS TERAKHIR)
exports.app.use(error_middleware_1.errorMiddleware);
