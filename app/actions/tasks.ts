"use server";

import { updateTaskStatusApi } from "@/src/services/task-service";
import { revalidatePath } from "next/cache";
import { TaskStatus } from "@/types/task";
import { createTaskApi } from "@/src/services/task-service";
import { updateTaskApi } from "@/src/services/task-service";
import { deleteTaskApi } from "@/src/services/task-service";

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
    return { error: "Gagal menyambung ke server" + error };
  }
}

export async function createTaskAction(
  title: string,
  // status: string,
  project: string,
  description: string,
  assignedTo: string,
  deadline: string,
) {
  try {
    await createTaskApi({
      title,
      // status,
      project,
      description,
      assignedTo,
      deadline,
      createdBy: "697ea339a8b0dd85c29d6ca8",
    });

    // Refresh halaman agar data terbaru muncul di server component
    revalidatePath(`/dashboard/projects/${project}`);
    return { success: true };
  } catch (error) {
    return { error: "Gagal menyambung ke server" + error };
  }
}

export async function updateTaskAction(
  taskId: string,
  data: any,
  projectId: string,
) {
  try {
    await updateTaskApi(taskId, data);
    revalidatePath(`/dashboard/projects/${projectId}`);
    return { success: true };
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function deleteTaskAction(taskId: string, projectId: string) {
  try {
    await deleteTaskApi(taskId);
    revalidatePath(`/dashboard/projects/${projectId}`);
    return { success: true };
  } catch (error: any) {
    return { error: error.message };
  }
}
