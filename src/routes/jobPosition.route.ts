import { Router } from "express"
import {
  getJobPosition,
  getJobPositionById,
  createJobPosition,
  updateJobPosition,
  deleteJobPosition,
} from "../controllers/jobPosition.controller"

const router = Router()

router.get("/", getJobPosition)
router.get("/:id", getJobPositionById)
router.post("/", createJobPosition)
router.put("/:id", updateJobPosition)
router.delete("/:id", deleteJobPosition)
export default router
