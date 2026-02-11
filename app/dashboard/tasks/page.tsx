// import { KanbanBoard } from "@/components/tasks/kanban-board";
import { KanbanClient } from "@/components/tasks/kanban-client";
import { Task } from "@/types/task";

export default async function TasksPage() {
  // Contoh Data (Nantinya ambil dari API)
  const initialTasks: Task[] = [
    { _id: "t-1", title: "Integrasi API Authentication", status: "todo" },
    { _id: "t-2", title: "Design Landing Page", status: "in-progress" },
    { _id: "t-3", title: "Setup Project Next.js", status: "done" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Task Management</h1>
        <p className="text-slate-500">
          Geser tugas untuk mengubah status progres.
        </p>
      </div>

      {/* <KanbanBoard initialTasks={initialTasks} /> */}
      <KanbanClient initialTasks={initialTasks} projectId="" />
    </div>
  );
}
