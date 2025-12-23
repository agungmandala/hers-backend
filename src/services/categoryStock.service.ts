import { prisma } from "../config/prisma"
import { AppError } from "../errors/app-error"

export class CategoryStockService {
  static async findAll() {
    return prisma.categoryStock.findMany()
  }

  static async findById(id: string) {
    const categoryStock = await prisma.categoryStock.findUnique({
      where: { id },
    })

    if (!categoryStock) {
      throw new AppError("Category stock not found", 404)
    }

    return categoryStock
  }

  static async create(data: {
    name: string
    description?: string
    type: string
  }) {
    const exists = await prisma.categoryStock.findFirst({
      where: { name: data.name },
    })

    if (exists) {
      throw new AppError("Name already registered", 409)
    }

    return prisma.categoryStock.create({
      data,
    })
  }

  static async update(
    id: string,
    data: {
      name: string
      description?: string
      type: string
    }
  ) {
    const categoryStock = await prisma.categoryStock.findUnique({
      where: { id },
    })

    if (!categoryStock) {
      throw new AppError("Category stock not found", 404)
    }

    await prisma.categoryStock.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        description: data.description,
        type: data.type,
      },
    })

    return categoryStock
  }

  static async delete(id: string) {
    const categoryStock = await prisma.categoryStock.findUnique({
      where: { id },
    })

    if (!categoryStock) {
      throw new AppError("Category stock not found", 404)
    }

    await prisma.categoryStock.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    })

    return categoryStock
  }
}
