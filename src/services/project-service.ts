import { apiRequest } from "@/lib/api-client";

export async function getProjects(title?: string, status?: string) {
  // Bangun query string secara dinamis
  const params = new URLSearchParams();
  if (title) params.append("title", title);
  if (status && status !== "all") params.append("status", status);

  const res = await apiRequest(`/project?${params.toString()}`);
  // console.log(res);
  if (!res.ok) throw new Error("Gagal mengambil data");

  return res.json();
}

export async function getProjectsById(projectId: string) {
  const res = await apiRequest(`/project/${projectId}`);
  if (!res.ok) throw new Error("Gagal mengambil data project");
  // Mengembalikan object utuh yang berisi field 'data'
  return res.json();
}
