"use client";

import dynamic from "next/dynamic";
import { Task } from "@/types/task";

// Pindahkan dynamic import ke sini
const KanbanBoardInternal = dynamic(
  () => import("./kanban-board").then((mod) => mod.KanbanBoard),
  {
    ssr: false,
    loading: () => (
      <p className="p-10 text-center text-slate-500 italic">
        Menyiapkan Board...
      </p>
    ),
  },
);

interface KanbanClientProps {
  initialTasks: Task[];
  projectId: string;
}

export function KanbanClient({ initialTasks, projectId }: KanbanClientProps) {
  return (
    <KanbanBoardInternal initialTasks={initialTasks} projectId={projectId} />
  );
}
