// import { Badge, MoreVertical } from "lucide-react";
// import { Progress } from "radix-ui";

// export default function ProjectCard({ project }: { project: Project }) {
//   const statusColors = {
//     Active: "bg-blue-100 text-blue-700 hover:bg-blue-100",
//     Completed: "bg-green-100 text-green-700 hover:bg-green-100",
//     "On Hold": "bg-amber-100 text-amber-700 hover:bg-amber-100",
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
//           {project.team.map((initial, i) => (
//             <div
//               key={i}
//               className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600"
//             >
//               {initial}
//             </div>
//           ))}
//         </div>
//         <div className="text-[11px] text-slate-400 font-medium italic">
//           Deadline: {project.dueDate}
//         </div>
//       </div>
//     </div>
//   );
// }
