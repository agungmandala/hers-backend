import { Router } from "express"
import { healthCheck } from "../controllers/health.controller"
import locationRoutes from "./location.route"

const router = Router()

router.get("/health", healthCheck)

// mount router
router.use("/locations", locationRoutes)

export default router
