import { Request, Response } from "express"
import { asyncHandler } from "../middlewares/async.middleware"
import { CategoryProductService } from "../services/categoryProduct.service"

export const getCategoryProducts = asyncHandler(
  async (_req: Request, res: Response) => {
    const categoryProducts = await CategoryProductService.findAll()

    res.status(200).json({
      success: true,
      data: categoryProducts,
    })
  }
)

export const getCategoryProductById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const categoryProduct = await CategoryProductService.findById(id)

    res.status(200).json({
      success: true,
      data: categoryProduct,
    })
  }
)

export const createCategoryProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, description, type, categoryStockId } = req.body

    const categoryProduct = await CategoryProductService.create({
      name,
      description,
      type,
      categoryStockId,
    })

    res.status(201).json({
      success: true,
      data: categoryProduct,
    })
  }
)

export const updateCategoryProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, description, type, categoryStockId } = req.body

    const categoryProduct = await CategoryProductService.update(id, {
      name,
      description,
      type,
      categoryStockId,
    })

    res.status(201).json({
      success: true,
      data: categoryProduct,
    })
  }
)

export const deleteCategoryProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const categoryProduct = await CategoryProductService.delete(id)
    res.status(201).json({
      success: true,
      data: categoryProduct,
    })
  }
)
