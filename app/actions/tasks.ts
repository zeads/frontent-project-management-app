"use server";

import { updateTaskStatusApi } from "@/src/services/task-service";
import { revalidatePath } from "next/cache";
import { TaskStatus } from "@/types/task";

export async function updateTaskStatusAction(
  taskId: string,
  status: TaskStatus,
  projectId: string,
) {
  const success = await updateTaskStatusApi(taskId, status);

  if (success) {
    // Refresh data agar sinkron dengan server
    revalidatePath(`/dashboard/projects/${projectId}`);
    return { success: true };
  }

  return { error: "Gagal memperbarui status" };
}
