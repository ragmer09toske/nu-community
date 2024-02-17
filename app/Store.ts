import { create } from "zustand";
interface StoreState {
  selectedContent: string;
  setContent: (newContent: string) => void;
}

const useStore = create<StoreState>((set) => ({
  selectedContent: "Landing",
  setContent: (newContent) =>
    set((state) => ({ selectedContent: newContent })), // Updated state updater function
}));

export default useStore;
