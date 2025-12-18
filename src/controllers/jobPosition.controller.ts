import { Request, Response } from "express"
import { asyncHandler } from "../middlewares/async.middleware"
import { JobPositionService } from "../services/jobPosition.service"

export const getJobPosition = asyncHandler(
  async (_req: Request, res: Response) => {
    const jobPositions = await JobPositionService.findAll()

    res.status(200).json({
      success: true,
      data: jobPositions,
    })
  }
)

export const getJobPositionById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const jobPosition = await JobPositionService.findById(id)

    res.status(200).json({
      success: true,
      data: jobPosition,
    })
  }
)

export const createJobPosition = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, description, isActive } = req.body

    const jobPosition = await JobPositionService.create({
      name,
      description,
      isActive,
    })

    res.status(201).json({
      success: true,
      data: jobPosition,
    })
  }
)

export const updateJobPosition = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, description, isActive } = req.body

    const jobPosition = await JobPositionService.update(id, {
      name,
      description,
      isActive,
    })

    res.status(201).json({
      success: true,
      data: jobPosition,
    })
  }
)

export const deleteJobPosition = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const jobPosition = await JobPositionService.delete(id)
    res.status(201).json({
      success: true,
      data: jobPosition,
    })
  }
)
