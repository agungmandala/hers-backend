import { Router } from "express"
import {
  createCategoryStock,
  deleteCategoryStock,
  getCategoryStock,
  getCategoryStockById,
  updateCategoryStock,
} from "../controllers/categoryStock.controller"

const router = Router()

router.get("/", getCategoryStock)
router.get("/:id", getCategoryStockById)
router.post("/", createCategoryStock)
router.put("/:id", updateCategoryStock)
router.delete("/:id", deleteCategoryStock)
export default router
