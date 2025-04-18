import { User } from "@/models/User"
import connectDB from "@/utils/db"
import { hash } from "bcryptjs"
import { NextResponse } from "next/server"


export async function POST(req) {

  const body = await req.json()
  const { firstName, lastName, email, password } = body

  console.log("Dữ liệu" + firstName)

  await connectDB()

  if (!firstName || !lastName || !email || !password) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const existingUser = await User.findOne({ email })
  if (existingUser) {
    return NextResponse.json({ error: 'Email already registered' }, { status: 409 })
  }

  const hashedPassword = await hash(password, 10)

  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  })

  return NextResponse.json({ message: 'User registered successfully', user: newUser })
}