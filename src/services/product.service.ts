import { prisma } from "../config/prisma"
import { AppError } from "../errors/app-error"

export class ProductService {
  static async findAll() {
    return prisma.product.findMany()
  }

  static async findById(id: string) {
    const product = await prisma.product.findUnique({
      where: { id },
    })

    if (!product) {
      throw new AppError("Product not found", 404)
    }

    return product
  }

  static async create(data: {
    name: string
    categoryProductId: string
    description?: string
    image?: string
    unitId?: string
    hpp?: number
    price?: number
    minimumStock: number
    isDeleted: boolean
    isActive: boolean
    type: string
  }) {
    const exists = await prisma.product.findFirst({
      where: { name: data.name },
    })

    if (exists) {
      throw new AppError("Name already registered", 409)
    }

    return prisma.product.create({
      data,
    })
  }

  static async update(
    id: string,
    data: {
      name: string
      categoryProductId: string
      description?: string
      image?: string
      unitId?: string
      hpp?: number
      price?: number
      minimumStock: number
      isDeleted: boolean
      isActive: boolean
      type: string
    }
  ) {
    const product = await prisma.product.findUnique({
      where: { id },
    })

    if (!product) {
      throw new AppError("Product not found", 404)
    }

    await prisma.product.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        categoryProductId: data.categoryProductId,
        description: data.description,
        image: data.image,
        unitId: data.unitId,
        hpp: data.hpp,
        price: data.price,
        minimumStock: data.minimumStock,
        isDeleted: data.isDeleted,
        isActive: data.isActive,
        type: data.type,
      },
    })

    return product
  }

  static async delete(id: string) {
    const product = await prisma.product.findUnique({
      where: { id },
    })

    if (!product) {
      throw new AppError("Product not found", 404)
    }

    await prisma.product.update({
      where: {
        id,
      },
      data: {
        isDeleted: true,
      },
    })

    return product
  }
}
