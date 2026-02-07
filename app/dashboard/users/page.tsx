// import { ApiResponse } from "@/types/apiResponse";
// import { User } from "@/types/user";

// async function getUsers(): Promise<ApiResponse<User>> {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
//     next: { revalidate: 3600 }, // Opsional: update data setiap jam
//   });

//   if (!res.ok) {
//     throw new Error("Gagal mengambil data user");
//   }

//   return res.json();
// }

import { getUsers } from "@/src/services/user-service";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Daftar Pengguna</h1>
        <p className="text-slate-500">Kelola semua data pengguna di sini.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.data.map((user) => (
          <div
            key={user._id}
            className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-blue-500 transition-colors"
          >
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-slate-500">{user.email}</p>
            <span className="text-xs">{user.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
