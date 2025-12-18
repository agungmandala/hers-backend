import { prisma } from "../config/prisma"
import { AppError } from "../errors/app-error"

export class JobPositionService {
  static async findAll() {
    return prisma.jobPosition.findMany()
  }

  static async findById(id: string) {
    const jobPosition = await prisma.jobPosition.findUnique({
      where: { id },
    })

    if (!jobPosition) {
      throw new AppError("Job position not found", 404)
    }

    return jobPosition
  }

  static async create(data: {
    name: string
    description?: string
    isActive: boolean
  }) {
    const exists = await prisma.jobPosition.findFirst({
      where: { name: data.name },
    })

    if (exists) {
      throw new AppError("Name already registered", 409)
    }

    return prisma.jobPosition.create({
      data,
    })
  }

  static async update(
    id: string,
    data: {
      name: string
      description?: string
      isActive: boolean
    }
  ) {
    const jobPosition = await prisma.jobPosition.findUnique({
      where: { id },
    })

    if (!jobPosition) {
      throw new AppError("Job position not found", 404)
    }

    await prisma.jobPosition.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        description: data.description,
        isActive: data.isActive,
      },
    })

    return jobPosition
  }

  static async delete(id: string) {
    const jobPosition = await prisma.jobPosition.findUnique({
      where: { id },
    })

    if (!jobPosition) {
      throw new AppError("Job position not found", 404)
    }

    await prisma.jobPosition.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    })

    return jobPosition
  }
}
