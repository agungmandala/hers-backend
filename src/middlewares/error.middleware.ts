import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors/app-error"
import { env } from "../config/env"

export function errorMiddleware(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    })
  }

  console.error(err)

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    ...(env.nodeEnv === "development" && { stack: err.stack }),
  })
}
