import { cookies } from "next/headers";

export async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("session_token")?.value;

  const defaultHeaders = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
    {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    },
  );

  return response;
}

// export async function apiRequest(endpoint: string, options: RequestInit = {}) {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
//     {
//       ...options,
//       credentials: "include", // ⬅ penting
//       headers: {
//         "Content-Type": "application/json",
//         ...options.headers,
//       },
//     },
//   );

//   return response;
// }
