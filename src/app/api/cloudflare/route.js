import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/Mongo/database";
import Visit from "@/model/Visit";

export async function POST(req) {
  await connectDB();

  const ip =
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.ip ||
    "127.0.0.1"; // fallback thêm

  const referer = req.headers.get("referer") || "Unknown";
  const userAgent = req.headers.get("user-agent") || "Unknown";

  const tenSecondsAgo = new Date(Date.now() - 10 * 1000);

  // ⏳ Tìm chính xác trước khi ghi
  const recentVisit = await Visit.findOne({
    ip,
    url: referer,
    createdAt: { $gte: tenSecondsAgo },
  });

  if (!recentVisit) {
    // 🧱 Ghi mới nếu chưa có
    await Visit.create({ ip, url: referer, userAgent });
    return NextResponse.json({ message: "Ghi thành công", ip });
  } else {
    return NextResponse.json({ message: "Đã ghi trong 10s", ip });
  }
}
