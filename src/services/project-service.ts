import { apiRequest } from "@/lib/api-client";
// import { ApiResponse } from "@/types/apiResponse";
// import { Project } from "@/types/project";
// import { cookies } from "next/headers";

// export async function getProjects(): Promise<ApiResponse<Project>> {
//   const cookieStore = await cookies();
//   const token = cookieStore.get("session_token")?.value;
//   // Menggunakan fetch bawaan Next.js yang sudah di-extend
//   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     // Strategi Caching:
//     // next: { revalidate: 3600 } // Data di-cache selama 1 jam
//     cache: "no-store", // Pakai ini jika data selalu berubah setiap detik (real-time)
//   });

//   if (response.status === 401) {
//     throw new Error("Unauthorized");
//   }

//   if (!response.ok) {
//     // Ini akan ditangkap oleh error.tsx terdekat
//     throw new Error("failed to fetch data projects");
//   }

//   return response.json();
// }

export async function getProjects(title?: string, status?: string) {
  // Bangun query string secara dinamis
  const params = new URLSearchParams();
  if (title) params.append("title", title);
  if (status && status !== "all") params.append("status", status);

  const res = await apiRequest(`/project?${params.toString()}`);
  console.log(res);
  if (!res.ok) throw new Error("Gagal mengambil data");

  return res.json();
}
