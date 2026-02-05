"use server";

import { LoginInput, loginSchema } from "@/lib/auth-schema";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(data: LoginInput) {
  const validatedFields = loginSchema.safeParse(data);
  if (!validatedFields.success) return { error: validatedFields.error };

  try {
    const response = await fetch(
      "https://backend-project-management-app.vercel.app/api/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedFields.data),
      },
    );

    const result = await response.json();

    // console.log(result);

    if (!response.ok) {
      return { error: result.message || "Login failed" };
    }

    const cookieStore = await cookies();
    cookieStore.set("session_token", result.data, {
      httpOnly: true,
      secure: true, //beda
      sameSite: "strict", //beda
      maxAge: 60 * 60 * 24, // 1 day
    });

    return { success: true };
  } catch (error) {
    return { error: "Connection error " + error };
  }
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("session_token");
  redirect("/login");
}
