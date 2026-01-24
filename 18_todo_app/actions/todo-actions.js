"use server";
import { revalidatePath } from "next/cache";
import connectDb from "@/lib/db";
import Todo from "@/model/todo";
import { createTodoSchema } from "@/validations/todo";

export async function createTodo(data) {
  try {
    // validate data
    await connectDb();
    //Validates input data against schema using parse
    // If data is invalid → ❌ throws error
    // If valid → ✅ returns safe
    //! parse javascript object bana deta hai data ko
    const validateData = createTodoSchema.parse(data);
    const todo = await Todo.create(validateData);
    revalidatePath("/");

    return {
      success: true,
      data: JSON.parse(JSON.stringify(todo)),
    };
  } catch (error) {
    console.error("Error while creating todo", error);
    return {
      success: false,
      error: error?.message || "Failed to create todo",
    };
  }
}
export async function getTodos() {
  try {
    await connectDb();

    const todos = await Todo.find({}).sort({ createdAt: -1 });
    return {
      success: true,
      data: JSON.parse(JSON.stringify(todos)),
    };
  } catch (error) {
    console.error("Error while getting todos", error);
    return {
      success: false,
      error: "Failed to get todos",
    };
  }
}
export async function ToggleTodo(id) {
  try {
    await connectDb();
    const todo = await Todo.findById(id);

    if (!todo) {
      return {
        success: false,
        error: "Todo not found",
      };
    }
    todo.completed = !todo.completed;
    await todo.save();
    revalidatePath("/");
    return {
      success: true,
      data: JSON.parse(JSON.stringify(todo)),
    };
  } catch (error) {
    console.error("Error while toggling todo", error);
    return {
      success: false,
      error: "Failed to toggle todo",
    };
  }
}

export async function deleteTodo(id) {
  try {
    await connectDb();
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return {
        success: false,
        error: "Todo not found",
      };
    }
    revalidatePath("/");
    return {
      success: true,
      data: JSON.parse(JSON.stringify(todo)),
    };
  } catch (error) {
    console.error("Error while deleting todo", error);
    return {
      success: false,
      error: "Failed to delete todo",
    };
  }
}
