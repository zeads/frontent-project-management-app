"use server";

import { LoginInput, loginSchema } from "@/lib/auth-schema";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { SignUpInput, signUpSchema } from "@/lib/auth-schema";

// Login action =================================================
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

// Logout action =================================================
export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("session_token");
  redirect("/login");
}

// Signup action =================================================
export async function signUpAction(data: SignUpInput) {
  const validatedFields = signUpSchema.safeParse(data);
  if (!validatedFields.success) return { error: "Data tidak valid" };

  try {
    const response = await fetch(
      "https://backend-project-management-app.vercel.app/api/auth/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: validatedFields.data.name,
          email: validatedFields.data.email,
          password: validatedFields.data.password,
        }),
      },
    );

    const result = await response.json();

    if (!response.ok) {
      // Contoh: Menangani error email sudah terdaftar
      return { error: result.message || "Gagal membuat akun" };
    }

    // Berhasil! Arahkan ke login atau otomatis login-kan user
    // Untuk saat ini, kita arahkan ke login dengan query parameter sukses
  } catch (error) {
    return { error: "Terjadi kesalahan sistem " + error };
  }

  redirect("/login?message=success_register");
}
