"use server";

import { projectSchema, ProjectInput } from "@/lib/project-schema";
import { apiRequest } from "@/lib/api-client"; // Wrapper yang kita buat tadi
import { revalidatePath } from "next/cache";

export async function createProjectAction(data: ProjectInput) {
  const validated = projectSchema.safeParse(data);
  if (!validated.success) return { error: "Data tidak valid" };

  // console.log(validated);
  // console.log("==============");
  // console.log(validated.data);

  try {
    const response = await apiRequest("/project", {
      method: "POST",
      body: JSON.stringify(validated.data),
    });

    // console.log(response);

    if (!response.ok) {
      const result = await response.json();
      return { error: result.message || "Gagal menambah project" };
    }

    // TRIGGER REVALIDASI:
    // Ini akan memberitahu Next.js untuk mengambil data baru untuk halaman projects
    revalidatePath("/dashboard/project");

    return { success: true };
  } catch (error) {
    return { error: "Terjadi kesalahan koneksi " + error };
  }
}

// Action untuk Update
export async function updateProjectAction(id: string, data: ProjectInput) {
  try {
    const response = await apiRequest(`/project/${id}`, {
      method: "PUT", // atau PATCH tergantung API-mu
      body: JSON.stringify(data),
    });

    if (!response.ok) return { error: "Gagal memperbarui proyek" };

    revalidatePath("/dashboard/project");
    return { success: true };
  } catch (error) {
    return { error: "Terjadi kesalahan sistem " + error };
  }
}

// Action untuk Delete
export async function deleteProjectAction(id: string) {
  try {
    const response = await apiRequest(`/project/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) return { error: "Gagal menghapus proyek" };

    revalidatePath("/dashboard/projects");
    return { success: true };
  } catch (error) {
    return { error: "Terjadi kesalahan sistem " + error };
  }
}
