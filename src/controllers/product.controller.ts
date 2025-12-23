import { Request, Response } from "express"
import { asyncHandler } from "../middlewares/async.middleware"
import { ProductService } from "../services/product.service"

export const getProduct = asyncHandler(async (_req: Request, res: Response) => {
  const products = await ProductService.findAll()
  res.status(200).json({
    success: true,
    data: products,
  })
})

export const getProductById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const product = await ProductService.findById(id)
    res.status(200).json({
      success: true,
      data: product,
    })
  }
)

export const createProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const {
      name,
      categoryProductId,
      description,
      image,
      unitId,
      hpp,
      price,
      minimumStock,
      isDeleted,
      isActive,
      type,
    } = req.body

    const product = await ProductService.create({
      name,
      categoryProductId,
      description,
      image,
      unitId,
      hpp,
      price,
      minimumStock,
      isDeleted,
      isActive,
      type,
    })

    res.status(201).json({
      success: true,
      data: product,
    })
  }
)

export const updateProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const {
      name,
      categoryProductId,
      description,
      image,
      unitId,
      hpp,
      price,
      minimumStock,
      isDeleted,
      isActive,
      type,
    } = req.body

    const product = await ProductService.update(id, {
      name,
      categoryProductId,
      description,
      image,
      unitId,
      hpp,
      price,
      minimumStock,
      isDeleted,
      isActive,
      type,
    })

    res.status(201).json({
      success: true,
      data: product,
    })
  }
)

export const deleteProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const product = await ProductService.delete(id)
    res.status(201).json({
      success: true,
      data: product,
    })
  }
)
