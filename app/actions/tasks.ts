"use server";

import { updateTaskStatusApi } from "@/src/services/task-service";
import { revalidatePath } from "next/cache";
import { TaskStatus } from "@/types/task";

export async function updateTaskStatusAction(
  taskId: string,
  status: TaskStatus,
  projectId: string,
) {
  try {
    const res = await updateTaskStatusApi(taskId, status);

    // Periksa apakah service mengembalikan error
    if (res && res.error) {
      return { error: res.error };
    }

    // Paksa Next.js mengambil data terbaru untuk project ini
    revalidatePath(`/dashboard/projects/${projectId}`);
    return { success: true };
  } catch (error) {
    return { error: "Gagal menyambung ke server" };
  }
}
