import { apiRequest } from "@/lib/api-client";
import { ApiResponse } from "@/types/apiResponse";
import { Task, TaskStatus } from "@/types/task";

// export async function getTasksByProject(projectId: string): Promise<Task[]> {
export async function getTasksByProject(
  projectId: string,
): Promise<ApiResponse<Task>> {
  // const res = await apiRequest(`/project/${projectId}/task`);
  const res = await apiRequest(`/task/${projectId}/project`);
  // console.log(res);
  if (!res.ok) throw new Error("Gagal mengambil data task");
  return res.json();
}

export async function updateTaskStatusApi(taskId: string, status: TaskStatus) {
  const res = await apiRequest(`/task/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });
  // console.log(res);
  if (!res.ok) {
    const error = await res.json();
    return { error: error.message || "Gagal update task" };
  }

  return res.json();
}

export async function createTaskApi(data: {
  title: string;
  // status: string;
  project: string;
  description: string;
  assignedTo: string;
  deadline: string;
  createdBy: string;
}) {
  console.log(data);
  const res = await apiRequest(`/task`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  console.log(res);
  const result = await res.json(); // Ambil body response dulu

  if (!res.ok) {
    // Log pesan error dari Express agar ketahuan salahnya di mana
    console.error("Backend Error Detail:", result);
    throw new Error(result.message || "Gagal membuat task");
  }

  // return res.json();
  return result;
}
