"use client";

import { useState } from "react";
import { createTaskAction } from "@/app/actions/tasks";
import { toast } from "sonner";
import { Loader2, X } from "lucide-react";
// import { a } from "motion/react-client";

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  //   status: string;
  project: string;
}

export function AddTaskModal({
  isOpen,
  onClose,
  //   status,
  project,
}: AddTaskModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [deadline, setDeadline] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    setIsLoading(true);
    const res = await createTaskAction(
      title,
      //   status,
      project,
      description,
      assignedTo,
      deadline,
    );
    setIsLoading(false);

    console.log(res);

    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success("Tugas berhasil ditambahkan");
      setTitle("");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-6 border-b flex justify-between items-center bg-slate-50">
          <h2 className="font-bold text-lg text-slate-800">Add New Task</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Task Title
            </label>
            <input
              autoFocus
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              placeholder="What do you want to do?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Description
            </label>
            <input
              autoFocus
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Assign to
            </label>
            <input
              autoFocus
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              placeholder="Assign to"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Deadline
            </label>
            <input
              autoFocus
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              placeholder="Deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div className="pt-2 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isLoading || !title.trim()}
              className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all flex justify-center items-center gap-2 shadow-lg shadow-blue-500/20"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" size={18} />
              ) : (
                "Simpan Tugas"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
