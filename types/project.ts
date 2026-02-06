// types/project.ts
export type ProjectStatus = "Active" | "Completed" | "On Hold";

export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  progress: number;
  dueDate: string;
  team: string[]; // Array of image URLs or initials
}
