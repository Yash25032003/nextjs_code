import { z } from "zod";

export const createTodoSchema = z.object({
  title: z
    .string()
    .min(1, "title is required")
    .max(100, "title cannot exceed 100 characters")
    .trim(),
  description: z
    .string()
    .max(500, "description cannot exceed 500 characters")
    .trim()
    .optional(),

  priority: z.enum(["low", "medium", "high"]).default("medium"),
});
