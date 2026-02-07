import { ApiResponse } from "@/types/apiResponse";
import { User } from "@/types/user";

export async function getUsers(): Promise<ApiResponse<User>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
    // next: { revalidate: 3600 }, // Opsional: update data setiap jam
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Gagal mengambil data user");
  }

  return res.json();
}
