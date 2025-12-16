import { prisma } from "../config/prisma"
import { AppError } from "../errors/app-error"

export class LocationService {
  static async findAll() {
    return prisma.location.findMany()
  }

  static async findById(id: string) {
    const location = await prisma.location.findUnique({
      where: { id },
    })

    if (!location) {
      throw new AppError("Location not found", 404)
    }

    return location
  }

  static async create(data: {
    name: string
    address?: string
    phone?: string
    email?: string
    isActive: boolean
    openTime?: Date
    closeTime?: Date
    isStore: boolean
    latitude: number
    longitude: number
  }) {
    const exists = await prisma.location.findFirst({
      where: { name: data.name },
    })

    if (exists) {
      throw new AppError("Name already registered", 409)
    }

    return prisma.location.create({
      data,
    })
  }
}
