import { Request, Response } from "express"
import { asyncHandler } from "../middlewares/async.middleware"
import { CategoryStockService } from "../services/categoryStock.service"

export const getCategoryStock = asyncHandler(
  async (_req: Request, res: Response) => {
    const categoryStocks = await CategoryStockService.findAll()

    res.status(200).json({
      success: true,
      data: categoryStocks,
    })
  }
)

export const getCategoryStockById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const categoryStock = await CategoryStockService.findById(id)

    res.status(200).json({
      success: true,
      data: categoryStock,
    })
  }
)

export const createCategoryStock = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, description, type } = req.body

    const categoryStock = await CategoryStockService.create({
      name,
      description,
      type,
    })

    res.status(201).json({
      success: true,
      data: categoryStock,
    })
  }
)

export const updateCategoryStock = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, description, type } = req.body

    const categoryStock = await CategoryStockService.update(id, {
      name,
      description,
      type,
    })

    res.status(201).json({
      success: true,
      data: categoryStock,
    })
  }
)

export const deleteCategoryStock = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const categoryStock = await CategoryStockService.delete(id)
    res.status(201).json({
      success: true,
      data: categoryStock,
    })
  }
)
