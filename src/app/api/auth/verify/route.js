// src/app/api/auth/verify/route.js
import { NextResponse } from "next/server";
import connectDB from "@/lib/Mongo/database";
import { User } from "@/model/User";
import { compare } from "bcryptjs";

export const runtime = "nodejs"; // Đảm bảo chạy trong Node.js runtime

export async function POST(req) {
  try {
    // Kết nối database
    await connectDB();

    // Lấy dữ liệu từ request
    const { email, password } = await req.json();

    // Kiểm tra tài khoản
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return NextResponse.json(null, { status: 401 });
    }

    // Kiểm tra password
    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(null, { status: 401 });
    }

    // Trả về client thông tin người dùng
    return NextResponse.json(
      {
        id: user._id.toString(),
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        verify: user.emailVerified,
      },
      { status: 200 }
    );
  } catch (error) {
    // Trả về lỗi
    console.error("Đăng nhập xảy ra lỗi:", error);
    return NextResponse.json(null, { status: 500 });
  }
}
