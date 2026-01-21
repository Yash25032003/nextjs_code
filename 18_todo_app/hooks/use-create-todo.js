import { createTodo } from "@/actions/todo-actions";
import { useTodosStore } from "@/store/todo-store";
import { createTodoSchema } from "@/validations/todo";
import { useQueryClient, useMutation } from "@tanstack/react-query";

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
