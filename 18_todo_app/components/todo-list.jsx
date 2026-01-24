"use client";
import React, { useMemo, useEffect } from "react";
import { useTodos } from "@/hooks/use-create-todo";
import { useTodosStore } from "@/store/todo-store";
import { Card, CardContent } from "./ui/card";
import { Loader2 } from "lucide-react";
import TodoItem from "./todo-item";

const TodoList = () => {
  const { data, isLoading, error } = useTodos();
  const setTodos = useTodosStore((state) => state.setTodos);
  const todos = useTodosStore((state) => state.todos);
  const filter = useTodosStore((state) => state.filter);
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.isCompleted);
      case "completed":
        return todos.filter((todo) => todo.isCompleted);
      default:
        return todos;
    }
  }, [todos, filter]);

  useEffect(() => {
    if (data) {
      setTodos(data);
    }
  }, [data, setTodos]);

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading todos...</p>
        </CardContent>
      </Card>
    );
  }
  if (error) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <p className="text-destructive">
            Error loading todos: {error.message}
          </p>
        </CardContent>
      </Card>
    );
  }
  if (filteredTodos.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <p className="text-muted-foreground">
            {data?.length === 0
              ? "No todos yet. Create your first one!"
              : "No todos match the current filter."}
          </p>
        </CardContent>
      </Card>
    );
  }
  return (
    <div className="space-y-3">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
