import { Router } from "express"
import {
  getLocation,
  getLocationById,
  createLocation,
  updateLocation,
  deleteLocation,
} from "../controllers/location.controller"

const router = Router()

router.get("/", getLocation)
router.get("/:id", getLocationById)
router.post("/", createLocation)
router.put("/:id", updateLocation)
router.delete("/:id", deleteLocation)

export default router
