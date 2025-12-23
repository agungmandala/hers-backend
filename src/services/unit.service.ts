import { prisma } from "../config/prisma"
import { AppError } from "../errors/app-error"

export class UnitService {
  static async findAll() {
    return prisma.unit.findMany()
  }

  static async findById(id: string) {
    const unit = await prisma.unit.findUnique({
      where: { id },
    })

    if (!unit) {
      throw new AppError("Unit not found", 404)
    }

    return unit
  }

  static async create(data: { name: string; description?: string }) {
    const exists = await prisma.unit.findFirst({
      where: { name: data.name },
    })

    if (exists) {
      throw new AppError("Name already registered", 409)
    }

    return prisma.unit.create({
      data,
    })
  }

  static async update(
    id: string,
    data: {
      name: string
      description?: string
    }
  ) {
    const unit = await prisma.unit.findUnique({
      where: { id },
    })

    if (!unit) {
      throw new AppError("Unit not found", 404)
    }

    await prisma.unit.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        description: data.description,
      },
    })

    return unit
  }

  static async delete(id: string) {
    const unit = await prisma.unit.findUnique({
      where: { id },
    })

    if (!unit) {
      throw new AppError("Unit not found", 404)
    }

    await prisma.unit.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    })

    return unit
  }
}
