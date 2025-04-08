// app/api/test/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    return NextResponse.json(
      {
        message: "Nhận thành công!",
        data: body,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Đã xảy ra lỗi!",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
