import { Request, Response } from "express"
import { asyncHandler } from "../middlewares/async.middleware"
import { UnitService } from "../services/unit.service"

export const getUnits = asyncHandler(async (_req: Request, res: Response) => {
  const units = await UnitService.findAll()
  res.status(200).json({
    success: true,
    data: units,
  })
})

export const getUnitById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params

  const unit = await UnitService.findById(id)
  res.status(200).json({
    success: true,
    data: unit,
  })
})

export const createUnit = asyncHandler(async (req: Request, res: Response) => {
  const { name, description } = req.body

  const unit = await UnitService.create({
    name,
    description,
  })

  res.status(201).json({
    success: true,
    data: unit,
  })
})

export const updateUnit = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params
  const { name, description } = req.body

  const unit = await UnitService.update(id, {
    name,
    description,
  })

  res.status(201).json({
    success: true,
    data: unit,
  })
})

export const deleteUnit = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params

  const unit = await UnitService.delete(id)
  res.status(201).json({
    success: true,
    data: unit,
  })
})
