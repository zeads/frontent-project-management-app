// import { Plus, Search, MoreVertical } from "lucide-react";
import { Search, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Project } from "@/types/project";
import { getProjects } from "@/src/services/project-service";
import { AddProjectDialog } from "@/components/projects/add-project-dialog";
import { ProjectCard } from "@/components/projects/project-card";

// Mock Data (Nantinya diganti dengan fetch dari API/DB)
// const projects: Project[] = [
//   {
//     id: "1",
//     title: "E-Commerce Re-design",
//     description: "Modernisasi tampilan UI/UX untuk platform toko online.",
//     status: "Active",
//     progress: 75,
//     dueDate: "24 Des 2025",
//     team: ["JS", "AS", "RK"],
//   },
//   {
//     id: "2",
//     title: "Mobile App Integration",
//     description: "Integrasi API sistem inventaris ke aplikasi Android & iOS.",
//     status: "On Hold",
//     progress: 30,
//     dueDate: "15 Jan 2026",
//     team: ["MD", "LM"],
//   },
//   {
//     id: "3",
//     title: "SEO Optimization",
//     description:
//       "Audit dan optimasi konten untuk meningkatkan traffic organik.",
//     status: "Completed",
//     progress: 100,
//     dueDate: "01 Feb 2026",
//     team: ["BK"],
//   },
// ];

export default async function ProjectsPage() {
  const projects = await getProjects();
  // console.log(projects.data);
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">My Projects</h1>
          <p className="text-slate-500 text-sm">
            Manage your projects from one central location
          </p>
        </div>
        {/* <Button className="w-full md:w-auto">
          <Plus className="mr-2 h-4 w-4" /> New Project
        </Button> */}
        <AddProjectDialog />
      </div>

      {/* Filter & Search Bar */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input placeholder="Cari proyek..." className="pl-9" />
        </div>
        <Button variant="outline" className="hidden sm:flex">
          Filter
        </Button>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.data.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}

// function ProjectCard({ project }: { project: Project }) {
//   const statusColors = {
//     Active: "bg-blue-100 text-blue-700 hover:bg-blue-100",
//     Completed: "bg-green-100 text-green-700 hover:bg-green-100",
//     "On Hold": "bg-amber-100 text-amber-700 hover:bg-amber-100",
//   };

//   const formatDate = (isoString: string) => {
//     return new Date(isoString).toLocaleDateString("en-GB", {
//       day: "numeric",
//       month: "long",
//       year: "numeric",
//     });
//   };

//   return (
//     <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
//       <div className="flex justify-between items-start mb-4">
//         <Badge
//           variant="secondary"
//           className={cn("font-medium", statusColors[project.status])}
//         >
//           {project.status}
//         </Badge>
//         <button className="text-slate-400 hover:text-slate-600">
//           <MoreVertical size={18} />
//         </button>
//       </div>

//       <div className="mb-4">
//         <h3 className="font-bold text-lg text-slate-900 leading-tight mb-1">
//           {project.title}
//         </h3>
//         <p className="text-sm text-slate-500 line-clamp-2">
//           {project.description}
//         </p>
//       </div>

//       <div className="space-y-3 mb-6">
//         <div className="flex justify-between text-xs font-medium">
//           <span className="text-slate-500">Progres</span>
//           <span className="text-slate-900">{project.progress}%</span>
//         </div>
//         <Progress value={project.progress} className="h-2" />
//       </div>

//       <div className="flex items-center justify-between pt-4 border-t border-slate-50">
//         <div className="flex -space-x-2">
//           {project.team.map((member, i) => (
//             <div
//               key={i}
//               className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600"
//             >
//               {member.name.slice(0, 1)}
//             </div>
//           ))}
//         </div>
//         <div className="text-[11px] text-slate-400 font-medium italic">
//           Deadline: {formatDate(project.dueDate)}
//         </div>
//       </div>
//     </div>
//   );
// }
