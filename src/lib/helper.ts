import { SignJWT } from "jose"

const key = new TextEncoder().encode(process.env.SECRET_JWT)

export const handleError = (err: any) => {
  if (err?.response?.data) {
    return err.response.data
  } else {
    return {
      message: "Oops, Terjadi kesalahan!",
      status: "error",
    }
  }
}

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(key)
}

function toRad(data: number) {
  return (data * Math.PI) / 180
}

export function calcCrow(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  let R = 6371 // km
  let dLat = toRad(lat2 - lat1)
  let dLon = toRad(lon2 - lon1)
  let aLat1 = toRad(lat1)
  let aLat2 = toRad(lat2)

  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(aLat1) * Math.cos(aLat2)
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  let d = R * c
  return d
}

export function dateDiff(startingDate: string, endingDate?: string): string {
  let startDate = new Date(new Date(startingDate).toISOString().substr(0, 10))
  if (!endingDate) {
    endingDate = new Date().toISOString().substr(0, 10) // need date in YYYY-MM-DD format
  }
  let endDate = new Date(endingDate)
  if (startDate > endDate) {
    const swap = startDate
    startDate = endDate
    endDate = swap
  }
  const startYear = startDate.getFullYear()
  const february =
    (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0
      ? 29
      : 28
  const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  let yearDiff = endDate.getFullYear() - startYear
  let monthDiff = endDate.getMonth() - startDate.getMonth()
  if (monthDiff < 0) {
    yearDiff--
    monthDiff += 12
  }
  let dayDiff = endDate.getDate() - startDate.getDate()
  if (dayDiff < 0) {
    if (monthDiff > 0) {
      monthDiff--
    } else {
      yearDiff--
      monthDiff = 11
    }
    dayDiff += daysInMonth[startDate.getMonth()]
  }

  if (yearDiff !== 0 && monthDiff !== 0 && dayDiff !== 0) {
    return `${yearDiff} Tahun ${monthDiff} Bulan ${dayDiff} Hari`
  }
  if (yearDiff === 0 && monthDiff !== 0 && dayDiff !== 0) {
    return `${monthDiff} Bulan ${dayDiff} Hari`
  }
  if (yearDiff === 0 && monthDiff === 0 && dayDiff !== 0) {
    return `${dayDiff} Hari`
  }
  if (yearDiff === 0 && monthDiff !== 0 && dayDiff === 0) {
    return `${monthDiff} Bulan`
  }
  if (yearDiff !== 0 && monthDiff === 0 && dayDiff === 0) {
    return `${yearDiff} Tahun`
  }
  if (yearDiff !== 0 && monthDiff !== 0 && dayDiff === 0) {
    return `${yearDiff} Tahun ${monthDiff} Bulan`
  }
  if (yearDiff !== 0 && monthDiff === 0 && dayDiff !== 0) {
    return `${yearDiff} Tahun ${dayDiff} Hari`
  }

  return ""
}

export function generateCode(digits: number) {
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = String(currentDate.getMonth() + 1).padStart(2, "0")
  const day = String(currentDate.getDate()).padStart(2, "0")
  const hours = String(currentDate.getHours()).padStart(2, "0")
  const minutes = String(currentDate.getMinutes()).padStart(2, "0")
  const randomPart = String(
    Math.floor(
      Math.random() * (Math.pow(10, digits) - Math.pow(10, digits - 1)) +
        Math.pow(10, digits - 1)
    )
  )

  const result = `${year}${month}${day}${hours}${minutes}${randomPart}`

  return result
}

export const IDR = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0, // Menghilangkan desimal
})

export function formatName(name: string): string {
  const words = name.trim().split(" ")

  // Jika hanya ada satu kata, kembalikan apa adanya
  if (words.length === 1) {
    return capitalize(words[0])
  }

  // Ambil kata pertama sebagai nama depan
  const firstName = capitalize(words[0])

  // Ambil huruf pertama dari nama terakhir
  const lastInitial =
    words.length > 1 ? capitalize(words[words.length - 1][0]) : ""

  // Gabungkan nama depan dan inisial nama terakhir
  return `${firstName} ${lastInitial}.`
}

function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}
