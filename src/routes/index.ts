import { Router } from "express"
import { healthCheck } from "../controllers/health.controller"
import locationRoutes from "./location.route"
import jobPositionRoutes from "./jobPosition.route"

const router = Router()

router.get("/health", healthCheck)

// mount router
router.use("/locations", locationRoutes)
router.use("/job-positions", jobPositionRoutes)

export default router
