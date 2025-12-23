import { Request, Response } from "express"
import { asyncHandler } from "../middlewares/async.middleware"
import { SessionService } from "../services/session.service"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.SECRET_JWT_ADMIN as string

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { username, password } = req.body

  const user = await SessionService.login(username, password)

  const id = user.id
  const token = jwt.sign(
    { id }, // payload
    JWT_SECRET,
    { expiresIn: "7d" }
  )

  res.cookie("hers", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // hanya aktif di https
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 hari
    ...(process.env.NODE_ENV === "production" && {
      domain: ".hersclinic.id",
    }), // hanya di production
  })

  res.status(200).json({
    success: true,
    data: {
      id: user.id,
      name: user.name,
      username: user.username,
      token,
    },
  })
})

export const logoutUser = asyncHandler(async (req: Request, res: Response) => {
  res.clearCookie("hers", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // hanya aktif di https
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    ...(process.env.NODE_ENV === "production" && {
      domain: ".hersclinic.id",
    }), // hanya di production
  })

  res.status(200).json({ message: "Logout berhasil", success: true })
})
