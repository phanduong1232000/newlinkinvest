// src/app/api/auth/verify/route.js
import { User } from "@/models/User";
import connectDB from "@/utils/db";
import { compare } from "bcryptjs";

export const runtime = "nodejs"; // Đảm bảo chạy trong Node.js runtime

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return new Response(JSON.stringify(null), { status: 401 });
    }

    const isPasswordValid = await compare(password, user.password);
    console.log(!isPasswordValid + "Mew Mew");
    if (!isPasswordValid) {
      return new Response(JSON.stringify(null), { status: 401 });
    }

    return new Response(
      JSON.stringify({
        id: user._id.toString(),
        email: user.email,
        role: user.role,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Authorize error:", error);
    return new Response(JSON.stringify(null), { status: 500 });
  }
}
