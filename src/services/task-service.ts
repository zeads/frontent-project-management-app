import { apiRequest } from "@/lib/api-client";
import { Task, TaskStatus } from "@/types/task";

export async function getTasksByProject(projectId: string): Promise<Task[]> {
  // const res = await apiRequest(`/project/${projectId}/task`);
  const res = await apiRequest(`/task/${projectId}/project`);
  // console.log(res);
  if (!res.ok) throw new Error("Gagal mengambil data task");
  return res.json();
}

export async function updateTaskStatusApi(taskId: string, status: TaskStatus) {
  const res = await apiRequest(`/task/${taskId}`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  });
  return res.ok;
}
