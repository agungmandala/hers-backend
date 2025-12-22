import { Router } from "express"
import {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  changePassword,
} from "../controllers/user.controller"

const router = Router()

router.get("/", getUser)
router.get("/:id", getUserById)
router.post("/", createUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.put("/:id/password", changePassword)
export default router
