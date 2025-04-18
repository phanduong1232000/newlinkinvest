"use server"

import { signIn } from "@/auth";

const login = async (prevState, formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/",
    });

    return { success: true };
  } catch (error) {
    return { error: "Sai email hoặc mật khẩu" };
  }
};

export { login };
