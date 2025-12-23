import { Router } from "express"
import {
  createCategoryProduct,
  deleteCategoryProduct,
  getCategoryProductById,
  getCategoryProducts,
  updateCategoryProduct,
} from "../controllers/categoryProduct.controller"

const router = Router()

router.get("/", getCategoryProducts)
router.get("/:id", getCategoryProductById)
router.post("/", createCategoryProduct)
router.put("/:id", updateCategoryProduct)
router.delete("/:id", deleteCategoryProduct)
export default router
