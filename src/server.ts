// src/server.ts
import { app } from "./app"
import { env } from "./config/env"
import { logger } from "./utils/logger"
import { prisma } from "./config/prisma"

const server = app.listen(env.port, () => {
  logger.info(`Server running on port ${env.port}`)
})

const shutdown = async (signal: string) => {
  logger.info(`Received ${signal}, shutting down...`)

  server.close(async () => {
    logger.info("HTTP server closed")

    try {
      await prisma.$disconnect()
      logger.info("Prisma disconnected")
    } catch (error) {
      logger.error(`Error during Prisma disconnect: ${error}`)
    } finally {
      process.exit(0)
    }
  })
}

process.on("SIGTERM", shutdown)
process.on("SIGINT", shutdown)
