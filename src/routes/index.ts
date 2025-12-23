import { Router } from "express"
import { healthCheck } from "../controllers/health.controller"
import locationRoutes from "./location.route"
import jobPositionRoutes from "./jobPosition.route"
import userRoutes from "./user.route"
import sessionRoutes from "./session.route"
import categoryStockRoutes from "./categoryStock.route"

const router = Router()

router.get("/health", healthCheck)

// mount router
router.use("/locations", locationRoutes)
router.use("/job-positions", jobPositionRoutes)
router.use("/users", userRoutes)
router.use("/sessions", sessionRoutes)
router.use("/category-stocks", categoryStockRoutes)

export default router
