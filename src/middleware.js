// src/middleware.js
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const session = await auth(); // Lấy thông tin session của người dùng

  // Kiểm tra nếu không có session (chưa đăng nhập)
  if (!session?.user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Kiểm tra nếu role không phải là "admin"
  if (session.user.role !== "user") {
    return NextResponse.redirect(new URL("/", request.url)); // Chuyển hướng về trang chủ hoặc trang khác
  }

  // Nếu là admin, cho phép tiếp tục
  return NextResponse.next();
}

// Cấu hình middleware để chỉ áp dụng cho trang /dashboard
export const config = {
  matcher: ["/dashboard/:path*"], // Áp dụng cho /dashboard và các sub-path
};