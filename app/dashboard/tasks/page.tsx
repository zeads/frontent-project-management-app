import { KanbanBoard } from "@/components/tasks/kanban-board";
import { Task } from "@/types/task";

export default async function TasksPage() {
  // Contoh Data (Nantinya ambil dari API)
  const initialTasks: Task[] = [
    { id: "t-1", content: "Integrasi API Authentication", status: "todo" },
    { id: "t-2", content: "Design Landing Page", status: "in-progress" },
    { id: "t-3", content: "Setup Project Next.js", status: "done" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Task Management</h1>
        <p className="text-slate-500">
          Geser tugas untuk mengubah status progres.
        </p>
      </div>

      <KanbanBoard initialTasks={initialTasks} />
    </div>
  );
}
