// import { getTasksByProject } from "@/src/services/task-service";
// import { getProjectsById } from "@/src/services/project-service";
// import dynamic from "next/dynamic";

// const KanbanBoard = dynamic(
//   () =>
//     import("@/components/tasks/kanban-board").then((mod) => mod.KanbanBoard),
//   { ssr: true, loading: () => <p>Memuat Board...</p> },
// );

// export default async function ProjectDetailPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const { id } = await params;
//   // console.log(id);

//   // Ambil data project & tasks secara paralel (Performance tip!)
//   const [project, tasks] = await Promise.all([
//     // Anda mungkin perlu fungsi getProjectById
//     // fetchProjectById(id),
//     getProjectsById(id),
//     getTasksByProject(id),
//   ]);

//   // console.log(project);
//   // console.log(tasks.data[0]);

//   return (
//     <div className="space-y-6">
//       <div>
//         <h1 className="text-2xl font-bold">{project.data.title}</h1>
//         <p className="text-slate-500">{project.data.description}</p>
//       </div>

//       <KanbanBoard initialTasks={tasks.data} projectId={id} />
//     </div>
//   );
// }

// =============================================================================
// import { getTasksByProject } from "@/src/services/task-service";
// import { getProjectsById } from "@/src/services/project-service";
// import dynamic from "next/dynamic";

// const KanbanBoard = dynamic(
//   () =>
//     import("@/components/tasks/kanban-board").then((mod) => mod.KanbanBoard),
//   // WAJIB: ssr harus false untuk library Drag and Drop
//   {
//     ssr: false,
//     loading: () => (
//       <p className="p-10 text-center text-slate-500">Memuat Board...</p>
//     ),
//   },
// );

// export default async function ProjectDetailPage({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   // Next.js 15 mewajibkan await pada params
//   const { id } = await params;

//   const [project, tasks] = await Promise.all([
//     getProjectsById(id),
//     getTasksByProject(id),
//   ]);

//   return (
//     <div className="space-y-6">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold tracking-tight text-slate-900">
//           {project.data.title}
//         </h1>
//         <p className="text-slate-500 mt-1">{project.data.description}</p>
//       </div>

//       {/* Kirim tasks.data sesuai struktur API kamu */}
//       <KanbanBoard initialTasks={tasks.data} projectId={id} />
//     </div>
//   );
// }

// =============================================================================

import { getTasksByProject } from "@/src/services/task-service";
import { getProjectsById } from "@/src/services/project-service";
import { KanbanClient } from "@/components/tasks/kanban-client"; // Import wrapper baru
// import { ApiResponse } from "@/types/apiResponse";

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
