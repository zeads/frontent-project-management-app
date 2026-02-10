// "use client";

// import { useState, useEffect } from "react";
// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
//   DropResult,
// } from "@hello-pangea/dnd";
// import { COLUMNS, Task, TaskStatus } from "@/types/task";
// import { cn } from "@/lib/utils";
// import { MoreHorizontal, Plus } from "lucide-react";

// import { updateTaskStatusAction } from "@/app/actions/tasks";
// import { toast } from "sonner";

// interface KanbanProps {
//   initialTasks: Task[];
//   projectId: string; // Tambahkan prop ini
// }

// // export function KanbanBoard({ initialTasks }: KanbanProps) {
// export function KanbanBoard({ initialTasks, projectId }: KanbanProps) {
//   const [tasks, setTasks] = useState<Task[]>(initialTasks);
//   //   const [isMounted, setIsMounted] = useState(false);

//   // console.log(projectId);
//   // console.log("------------------");
//   // console.log(tasks);
//   // Sync state jika initialTasks berubah (misal setelah revalidate)
//   useEffect(() => {
//     setTasks(initialTasks);
//   }, [initialTasks]);

//   // Mencegah Hydration Error pada DnD
//   //   useEffect(() => {
//   //     setIsMounted(true);
//   //   }, []);

//   //   if (!isMounted) return null;

//   //   const onDragEnd = (result: DropResult) => {
//   const onDragEnd = async (result: any) => {
//     const { destination, source, draggableId } = result;

//     if (!destination) return;
//     if (
//       destination.droppableId === source.droppableId &&
//       destination.index === source.index
//     )
//       return;

//     const newStatus = destination.droppableId as TaskStatus;

//     // 1. Optimistic UI Update (Update di layar dulu supaya terasa instan)
//     const previousTasks = [...tasks];
//     setTasks(
//       tasks.map((t) =>
//         t.id === draggableId ? { ...t, status: newStatus } : t,
//       ),
//     );

//     // 2. Kirim ke API melalui Server Action
//     const res = await updateTaskStatusAction(draggableId, newStatus, projectId);

//     if (res.error) {
//       toast.error(res.error);
//       setTasks(previousTasks); // Rollback jika gagal
//     }
//   };

//   // Update state secara lokal (Optimistic Update)
//   //     const updatedTasks = tasks.map((t) => {
//   //       if (t.id === draggableId) {
//   //         return { ...t, status: destination.droppableId as TaskStatus };
//   //       }
//   //       return t;
//   //     });

//   //     setTasks(updatedTasks);

//   //     // TODO: Panggil Server Action untuk update ke Database/API
//   //     console.log(`Task ${draggableId} pindah ke ${destination.droppableId}`);
//   //   };

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <div className="flex gap-6 overflow-x-auto pb-4">
//         {COLUMNS.map((col) => (
//           <div
//             key={col.id}
//             className="bg-slate-50/50 border rounded-xl w-80 shrink-0"
//           >
//             {/* Header Kolom */}
//             <div className="p-4 flex justify-between items-center">
//               <h3 className="font-bold text-slate-700 flex items-center gap-2">
//                 {col.title}
//                 <span className="text-xs bg-slate-200 px-2 py-0.5 rounded-full text-slate-500">
//                   {tasks.filter((t) => t.status === col.id).length}
//                 </span>
//               </h3>
//               <button className="text-slate-400 hover:text-slate-600">
//                 <MoreHorizontal size={18} />
//               </button>
//             </div>

//             {/* Area Droppable */}
//             <Droppable droppableId={col.id}>
//               {(provided, snapshot) => (
//                 <div
//                   {...provided.droppableProps}
//                   ref={provided.innerRef}
//                   className={cn(
//                     "p-3 min-h-125 transition-colors",
//                     snapshot.isDraggingOver ? "bg-slate-100/50" : "",
//                   )}
//                 >
//                   {tasks
//                     .filter((t) => t.status === col.id)
//                     .map((task, index) => (
//                       <TaskCard key={task.id} task={task} index={index} />
//                     ))}

//                   {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>

//             <div className="p-3 border-t">
//               <button className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 w-full transition-colors">
//                 <Plus size={16} /> Tambah Task
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </DragDropContext>
//   );
// }

// function TaskCard({ task, index }: { task: Task; index: number }) {
//   return (
//     <Draggable draggableId={task.id} index={index}>
//       {(provided, snapshot) => (
//         <div
//           ref={provided.innerRef}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           className={cn(
//             "bg-white p-4 rounded-lg border shadow-sm mb-3 select-none",
//             snapshot.isDragging
//               ? "shadow-lg ring-2 ring-blue-500/20 border-blue-500"
//               : "border-slate-200",
//           )}
//         >
//           <p className="text-sm font-medium text-slate-700">{task.title}</p>
//         </div>
//       )}
//     </Draggable>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { COLUMNS, Task, TaskStatus } from "@/types/task";
import { cn } from "@/lib/utils";
import { MoreHorizontal, Plus } from "lucide-react";
import { updateTaskStatusAction } from "@/app/actions/tasks";
import { toast } from "sonner";

interface KanbanProps {
  initialTasks: Task[];
  projectId: string;
}

export function KanbanBoard({ initialTasks, projectId }: KanbanProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  // Penting: Sync state saat data dari server berubah
  useEffect(() => {
    setTasks(initialTasks);
  }, [initialTasks]);

  const onDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    // Jika posisi tidak berubah, abaikan
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const previousTasks = [...tasks];

    // LOGIKA REORDERING & MOVING
    const newStatus = destination.droppableId as TaskStatus;

    // 1. Ambil item yang sedang di-drag
    const draggedTask = tasks.find((t) => t.id === draggableId);
    if (!draggedTask) return;

    // 2. Buat array baru tanpa item tersebut
    const remainingTasks = tasks.filter((t) => t.id !== draggableId);

    // 3. Masukkan item ke posisi baru dengan status baru
    const updatedTask = { ...draggedTask, status: newStatus };

    // Cari index yang tepat di dalam array global berdasarkan kolom tujuan
    // (Ini adalah cara sederhana, untuk performa lebih baik gunakan library array-move)
    const tasksInTargetCol = remainingTasks.filter(
      (t) => t.status === newStatus,
    );
    const tasksNotInTargetCol = remainingTasks.filter(
      (t) => t.status !== newStatus,
    );

    tasksInTargetCol.splice(destination.index, 0, updatedTask);

    const finalTasks = [...tasksNotInTargetCol, ...tasksInTargetCol];

    // Update UI secara Optimistic
    setTasks(finalTasks);

    // 4. Kirim ke API
    const res = await updateTaskStatusAction(draggableId, newStatus, projectId);

    if (res?.error) {
      toast.error(res.error);
      setTasks(previousTasks); // Rollback jika gagal
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-6 overflow-x-auto pb-4 items-start">
        {COLUMNS.map((col) => (
          <div
            key={col.id}
            className="bg-slate-50/80 border border-slate-200 rounded-xl w-80 shrink-0 shadow-sm"
          >
            <div className="p-4 flex justify-between items-center border-b border-slate-100">
              <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                {col.title}
                <span className="text-xs bg-white border border-slate-200 px-2 py-0.5 rounded-full text-slate-500 font-medium">
                  {tasks.filter((t) => t.status === col.id).length}
                </span>
              </h3>
              <MoreHorizontal
                size={18}
                className="text-slate-400 cursor-pointer"
              />
            </div>

            <Droppable droppableId={col.id}>
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={cn(
                    "p-3 min-h-125 transition-colors duration-200",
                    snapshot.isDraggingOver ? "bg-slate-100/80" : "",
                  )}
                >
                  {tasks
                    .filter((t) => t.status === col.id)
                    .map((task, index) => (
                      <TaskCard key={task.id} task={task} index={index} />
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <div className="p-3">
              <button className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 hover:bg-blue-50 w-full p-2 rounded-lg transition-all">
                <Plus size={16} /> Tambah Task
              </button>
            </div>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
}

// Komponen TaskCard dipisah agar kode lebih rapi
function TaskCard({ task, index }: { task: Task; index: number }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={cn(
            "bg-white p-4 rounded-lg border shadow-sm mb-3 transition-all duration-200",
            snapshot.isDragging
              ? "shadow-xl ring-2 ring-blue-500 border-blue-500 rotate-2 z-50"
              : "border-slate-200 hover:border-slate-300",
          )}
        >
          <p className="text-sm font-medium text-slate-700 leading-relaxed">
            {task.title}
          </p>
        </div>
      )}
    </Draggable>
  );
}
