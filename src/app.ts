// src/app.ts
import express from "express"
import helmet from "helmet"
import cors from "cors"
import compression from "compression"
import routes from "./routes"
import { errorMiddleware } from "./middlewares/error.middleware"
import { notFoundMiddleware } from "./middlewares/not-found.middleware"

export const app = express()

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(cors())
app.use(compression())

// Routes
app.use("/api", routes)

// 404 handler
app.use(notFoundMiddleware)

// Error handler (HARUS TERAKHIR)
app.use(errorMiddleware)
