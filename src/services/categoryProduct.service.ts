import { prisma } from "../config/prisma"
import { AppError } from "../errors/app-error"

export class CategoryProductService {
  static async findAll() {
    return prisma.categoryProduct.findMany()
  }

  static async findById(id: string) {
    const categoryProduct = await prisma.categoryProduct.findUnique({
      where: { id },
    })

    if (!categoryProduct) {
      throw new AppError("Category product not found", 404)
    }

    return categoryProduct
  }

  static async create(data: {
    name: string
    description?: string
    type: string
    categoryStockId: string
  }) {
    const exists = await prisma.categoryProduct.findFirst({
      where: { name: data.name },
    })

    if (exists) {
      throw new AppError("Name already registered", 409)
    }

    return prisma.categoryProduct.create({
      data,
    })
  }

  static async update(
    id: string,
    data: {
      name: string
      description?: string
      type: string
      categoryStockId: string
    }
  ) {
    const categoryProduct = await prisma.categoryProduct.findUnique({
      where: { id },
    })

    if (!categoryProduct) {
      throw new AppError("Category product not found", 404)
    }

    await prisma.categoryProduct.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        description: data.description,
        type: data.type,
      },
    })

    return categoryProduct
  }

  static async delete(id: string) {
    const categoryProduct = await prisma.categoryProduct.findUnique({
      where: { id },
    })

    if (!categoryProduct) {
      throw new AppError("Category product not found", 404)
    }

    await prisma.categoryProduct.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    })

    return categoryProduct
  }
}
