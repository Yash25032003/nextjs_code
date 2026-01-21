"use server";
import { revalidatePath } from "next/cache";
import connectDb from "@/lib/db";
import Todo from "@/model/todo";
import { createTodoSchema } from "@/validations/todo";

export async function createTodo(data) {
  try {
    // validate data
    const validateData = createTodoSchema.parse(data);
    await connectDb();
    const todo = new Todo(validateData);
    revalidatePath("/");

    return {
      success: true,
      data: JSON.parse(JSON.stringify(todo)),
    };
  } catch (error) {
    console.error("Error while creating todo", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create todo",
    };
  }
}
