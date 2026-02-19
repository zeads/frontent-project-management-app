import { getTasksByProject } from "@/src/services/task-service";
import { getProjectsById } from "@/src/services/project-service";
import { KanbanClient } from "@/components/tasks/kanban-client"; // Import wrapper baru

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>; // Gunakan Promise untuk Next.js 15
}) {
  const { id } = await params;

  // Fetch data di server (tetap aman & cepat)
  const [project, tasks] = await Promise.all([
    getProjectsById(id),
    getTasksByProject(id),
  ]);

  // console.log(tasks);

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          {project.data.title}
        </h1>
        <p className="text-slate-500 mt-1">{project.data.description}</p>
      </div>

      {/* Gunakan Client Wrapper di sini */}
      <KanbanClient initialTasks={tasks.data} projectId={id} />
    </div>
  );
}
