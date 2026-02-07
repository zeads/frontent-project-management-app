// types/project.ts
export type ProjectStatus = "Active" | "Completed" | "On Hold";

export interface ProjectMember {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  progress: number;
  dueDate: string;
  // team: string[]; // Array of image URLs or initials
  team: ProjectMember[]; // Array of image URLs or initials
}
