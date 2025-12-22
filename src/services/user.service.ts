import { prisma } from "../config/prisma"
import { AppError } from "../errors/app-error"
import { defaultPermission } from "../models/permission/permission"
import bcrypt from "bcryptjs"

export class UserService {
  static async findAll() {
    return prisma.user.findMany({
      omit: { password: true },
      include: {
        userDetail: true,
        employeeInfo: {
          include: {
            location: true,
          },
        },
        userJobPositions: {
          include: {
            jobPosition: true,
          },
        },
      },
    })
  }

  static async findById(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
    })

    if (!user) {
      throw new AppError("User tidak ditemukan", 404)
    }

    return user
  }

  static async create(data: {
    name: string
    username: string
    password: string
    phoneNumber?: string
    ktpPhoto?: string
    nikKtp?: string
    photo?: string
    address?: string
    dateOfBirth?: Date
    placeOfBirth?: string
    gender?: string
    religion?: string
    educationalBackground?: string
    maritalStatus?: string
    employeeStatus: string
    locationId: string
    dateOfEntry?: Date
    startDate?: Date
    endDate?: Date
    annualLeave?: number
    userJobPositions?: { jobPositionId: string }[]
  }) {
    const { name, username, password, locationId } = data

    if (
      !name ||
      !username ||
      !password ||
      !locationId ||
      !data.employeeStatus
    ) {
      throw new AppError("Data tidak lengkap", 400)
    }

    const exists = await prisma.user.findFirst({
      where: { name },
    })

    if (exists) {
      throw new AppError("Name already registered", 409)
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          name,
          username,
          password: hashedPassword,
          permission: defaultPermission as any,
        },
      })

      await tx.userDetail.create({
        data: {
          userId: user.id,
          phoneNumber: data.phoneNumber,
          ktpPhoto: data.ktpPhoto,
          nikKtp: data.nikKtp,
          photo: data.photo,
          address: data.address,
          dateOfBirth: data.dateOfBirth,
          placeOfBirth: data.placeOfBirth,
          gender: data.gender,
          religion: data.religion,
          educationalBackground: data.educationalBackground,
          maritalStatus: data.maritalStatus,
        },
      })

      await tx.employeeInfo.create({
        data: {
          userId: user.id,
          locationId,
          dateOfEntry: data.dateOfEntry,
          startDate: data.startDate,
          endDate: data.endDate,
          employeeStatus: data.employeeStatus,
          annualLeave: data.annualLeave,
        },
      })

      const jobPositions = data.userJobPositions ?? []

      for (const jobPosition of jobPositions) {
        await tx.userJobPosition.create({
          data: {
            userId: user.id,
            jobPositionId: jobPosition.jobPositionId,
          },
        })
      }
    })
  }

  static async update(
    id: string,
    data: {
      name: string
      username: string
      phoneNumber?: string
      ktpPhoto?: string
      nikKtp?: string
      photo?: string
      address?: string
      dateOfBirth?: Date
      placeOfBirth?: string
      gender?: string
      religion?: string
      educationalBackground?: string
      maritalStatus?: string
      employeeStatus: string
      locationId: string
      dateOfEntry?: Date
      startDate?: Date
      endDate?: Date
      annualLeave?: number
      userJobPositions?: { id: string; jobPositionId: string }[]
    }
  ) {
    const user = await prisma.user.findUnique({
      where: { id },
    })

    if (!user) {
      throw new AppError("User not found", 404)
    }

    await prisma.$transaction(async (tx) => {
      await tx.user.update({
        where: { id },
        data: {
          name: data.name,
          username: data.username,
        },
      })

      await tx.userDetail.update({
        where: { userId: id },
        data: {
          phoneNumber: data.phoneNumber,
          ktpPhoto: data.ktpPhoto,
          nikKtp: data.nikKtp,
          photo: data.photo,
          address: data.address,
          dateOfBirth: data.dateOfBirth,
          placeOfBirth: data.placeOfBirth,
          gender: data.gender,
          religion: data.religion,
          educationalBackground: data.educationalBackground,
          maritalStatus: data.maritalStatus,
        },
      })

      await tx.employeeInfo.update({
        where: { userId: id },
        data: {
          locationId: data.locationId,
          dateOfEntry: data.dateOfEntry,
          startDate: data.startDate,
          endDate: data.endDate,
          employeeStatus: data.employeeStatus,
          annualLeave: data.annualLeave,
        },
      })

      await tx.userJobPosition.deleteMany({
        where: { userId: id },
      })

      const jobPositions = data.userJobPositions ?? []

      for (const jobPosition of jobPositions) {
        await tx.userJobPosition.create({
          data: {
            userId: id,
            jobPositionId: jobPosition.jobPositionId,
          },
        })
      }
    })
  }

  static async delete(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
    })

    if (!user) {
      throw new AppError("User not found", 404)
    }

    await prisma.user.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    })

    return user
  }

  static async changePassword(id: string, newPassword: string) {
    if (!newPassword.length) {
      throw new AppError("New password is required", 400)
    }

    const user = await prisma.user.findUnique({
      where: { id },
    })

    if (!user) {
      throw new AppError("User not found", 404)
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10)
    await prisma.user.update({
      where: { id },
      data: { password: hashedPassword },
    })
  }
}
