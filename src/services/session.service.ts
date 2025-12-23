import { prisma } from "../config/prisma"
import { AppError } from "../errors/app-error"
import bcrypt from "bcryptjs"

export class SessionService {
  static async login(username: string, password: string) {
    if (!username || !password) {
      throw new AppError("Username dan Password salah", 400)
    }

    const user = await prisma.user.findFirst({
      where: { username },
    })

    if (!user) {
      throw new AppError("Username tidak ditemukan", 404)
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      throw new AppError("Username dan Password salah", 401)
    }

    return user
  }
}
