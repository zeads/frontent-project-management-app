export type TaskStatus = "todo" | "in-progress" | "done";

export interface Task {
  id: string;
  // content: string;
  title: string;
  status: TaskStatus;
}

export const COLUMNS = [
  { id: "todo", title: "To Do" },
  { id: "in-progress", title: "In Progress" },
  { id: "done", title: "Done" },
];
