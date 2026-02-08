import * as z from "zod";

export const projectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  status: z.enum(["Active", "On Hold", "Completed"]),
  dueDate: z.string().min(1, "Deadline is required"),
  // createdBy: z.string(),
});

export type ProjectInput = z.infer<typeof projectSchema>;
