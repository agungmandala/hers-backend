import { Router } from "express"
import {
  getLocation,
  getLocationById,
  createLocation,
} from "../controllers/location.controller"

const router = Router()

router.get("/", getLocation)
router.get("/:id", getLocationById)
router.post("/", createLocation)

export default router
