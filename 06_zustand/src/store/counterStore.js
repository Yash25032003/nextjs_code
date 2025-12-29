import { create } from "zustand";
export const useCounterStore = create((set) => ({
  // variable declare
  count: 0,
  // function declare
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
