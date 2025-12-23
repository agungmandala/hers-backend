import { Router } from "express"
import {
  createUnit,
  deleteUnit,
  getUnitById,
  getUnits,
  updateUnit,
} from "../controllers/unit.controller"

const router = Router()

router.get("/", getUnits)
router.get("/:id", getUnitById)
router.post("/", createUnit)
router.put("/:id", updateUnit)
router.delete("/:id", deleteUnit)
export default router
