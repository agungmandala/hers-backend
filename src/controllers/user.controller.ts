import { Request, Response } from "express"
import { asyncHandler } from "../middlewares/async.middleware"
import { UserService } from "../services/user.service"

export const getUser = asyncHandler(async (_req: Request, res: Response) => {
  const users = await UserService.findAll()

  res.status(200).json({
    success: true,
    data: users,
  })
})

export const getUserById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params

  const user = await UserService.findById(id)

  res.status(200).json({
    success: true,
    data: user,
  })
})

export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const {
    name,
    username,
    password,
    phoneNumber,
    ktpPhoto,
    nikKtp,
    photo,
    address,
    dateOfBirth,
    placeOfBirth,
    gender,
    religion,
    educationalBackground,
    maritalStatus,
    employeeStatus,
    locationId,
    dateOfEntry,
    startDate,
    endDate,
    annualLeave,
    userJobPositions,
  } = req.body

  const user = await UserService.create({
    name,
    username,
    password,
    phoneNumber,
    ktpPhoto,
    nikKtp,
    photo,
    address,
    dateOfBirth,
    placeOfBirth,
    gender,
    religion,
    educationalBackground,
    maritalStatus,
    employeeStatus,
    locationId,
    dateOfEntry,
    startDate,
    endDate,
    annualLeave,
    userJobPositions,
  })

  res.status(201).json({
    success: true,
    data: user,
  })
})

export const updateUser = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params
  const {
    name,
    username,
    phoneNumber,
    ktpPhoto,
    nikKtp,
    photo,
    address,
    dateOfBirth,
    placeOfBirth,
    gender,
    religion,
    educationalBackground,
    maritalStatus,
    employeeStatus,
    locationId,
    dateOfEntry,
    startDate,
    endDate,
    annualLeave,
    userJobPositions,
  } = req.body

  const user = await UserService.update(id, {
    name,
    username,
    phoneNumber,
    ktpPhoto,
    nikKtp,
    photo,
    address,
    dateOfBirth,
    placeOfBirth,
    gender,
    religion,
    educationalBackground,
    maritalStatus,
    employeeStatus,
    locationId,
    dateOfEntry,
    startDate,
    endDate,
    annualLeave,
    userJobPositions,
  })

  res.status(201).json({
    success: true,
    data: user,
  })
})

export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params

  const user = await UserService.delete(id)

  res.status(201).json({
    success: true,
    data: user,
  })
})

export const changePassword = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const { password } = req.body

    const user = await UserService.changePassword(id, password)

    res.status(201).json({
      success: true,
      data: user,
    })
  }
)
