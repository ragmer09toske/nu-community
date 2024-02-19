import { create } from "zustand";
interface StoreState {
  selectedContent: string;
  selectedFiles: string;
  setContent: (newContent: string) => void;
  setFiles: (newFiles: string) => void;
}

const useStore = create<StoreState>((set) => ({
  selectedContent: "Landing",
  selectedFiles: "Files",

  setContent: (newContent) =>
    set((state) => ({ selectedContent: newContent })), // Updated state updater function

  setFiles: (newFiles) =>
    set((state) => ({ selectedContent: newFiles })), // Updated state updater function
}));

export default useStore;
