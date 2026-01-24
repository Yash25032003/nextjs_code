import {
  createTodo,
  deleteTodo,
  getTodos,
  ToggleTodo,
} from "@/actions/todo-actions";
import { useTodosStore } from "@/store/todo-store";
import { createTodoSchema } from "@/validations/todo";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";

// export function useTodos() {
//   const setTodos = useTodosStore((state) => state.setTodos);
// }

export const todoKeys = {
  all: ["todos"],
  lists: () => [...todoKeys.all, "lists"],
};

// Custom hook → reusable mutation logic
export function useCreateTodo() {
  //Gives access to React Query cache
  // Used to invalidate or update queries
  const queryClient = useQueryClient();

  const addTodo = useTodosStore((state) => state.addTodo);
  return useMutation({
    // Calls server action createTodo
    mutationFn: (data) => createTodo(data),
    onSuccess: (result) => {
      if (result.success) {
        // addTodo(result.data);
        console.log(result.data);
        queryClient.invalidateQueries({ queryKey: todoKeys.lists() });
      }
    },
  });
}
export function useTodos() {
  const setTodos = useTodosStore((state) => state.setTodos);

  return useQuery({
    queryKey: todoKeys.lists(),
    queryFn: async () => {
      const result = await getTodos();
      console.log(result);

      if (result.success) {
        // update zustand store with the fetched data
        setTodos(result.data);
        return result.data;
      }
      throw new Error(result.error);
    },
  });
}

export function useToggleTodo() {
  const queryClient = useQueryClient();
  const updateTodoInStore = useTodosStore((state) => state.updateTodo);

  return useMutation({
    mutationFn: (id) => ToggleTodo(id),
    onSuccess: (result, id) => {
      if (result.success) {
        updateTodoInStore(id, { completed: result.data.completed });
        queryClient.invalidateQueries({ queryKey: todoKeys.lists() });
      }
    },
  });
}
export function useDeleteTodo() {
  const queryClient = useQueryClient();
  const removeTodo = useTodosStore((state) => state.removeTodo);
  return useMutation({
    mutationFn: (id) => deleteTodo(id),
    onSuccess: (result, id) => {
      if (result.success) {
        removeTodo(id);
        queryClient.invalidateQueries({ queryKey: todoKeys.lists() });
      }
    },
  });
}
