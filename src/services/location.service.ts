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

  static async update(
    id: string,
    data: {
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
    }
  ) {
    const location = await prisma.location.findUnique({
      where: { id },
    })

    if (!location) {
      throw new AppError("Location not found", 404)
    }

    await prisma.location.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        address: data.address,
        phone: data.phone,
        email: data.email,
        isActive: data.isActive,
        openTime: data.openTime,
        closeTime: data.closeTime,
        isStore: data.isStore,
        latitude: data.latitude,
        longitude: data.longitude,
      },
    })

    return location
  }

  static async delete(id: string) {
    const location = await prisma.location.findUnique({
      where: { id },
    })

    if (!location) {
      throw new AppError("Location not found", 404)
    }

    await prisma.location.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    })

    return location
  }
}
