import { create } from "zustand";

export const usePostStore = create((set) => ({
  post: [],
  loading: false,
  error: null,
  fetchPost: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const data = await res.json();
      set({ post: data, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch the posts", loading: false });
    }
  },
}));
