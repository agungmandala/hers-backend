import { Request, Response } from "express"
import { asyncHandler } from "../middlewares/async.middleware"
import { LocationService } from "../services/location.service"

export const getLocation = asyncHandler(
  async (_req: Request, res: Response) => {
    const locations = await LocationService.findAll()

    res.status(200).json({
      success: true,
      data: locations,
    })
  }
)

export const getLocationById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const location = await LocationService.findById(id)

    res.status(200).json({
      success: true,
      data: location,
    })
  }
)

export const createLocation = asyncHandler(
  async (req: Request, res: Response) => {
    const {
      name,
      address,
      phone,
      email,
      isActive,
      openTime,
      closeTime,
      isStore,
      latitude,
      longitude,
    } = req.body

    const location = await LocationService.create({
      name,
      address,
      phone,
      email,
      isActive,
      openTime,
      closeTime,
      isStore,
      latitude,
      longitude,
    })

    res.status(201).json({
      success: true,
      data: location,
    })
  }
)
