import { create } from "zustand";

interface User {
  _id: string;
  name: string;
  number: number;
  email: string;
  password: string;
  role: string;
  organization: string;
  avatar: string;
  __v: number;
}

interface StoreState {
  selectedContent: string;
  selectedFiles: string;
  loginToken: string;
  user: User | null; // Add user property to StoreState

  setContent: (newContent: string) => void;
  setLoginToken: (loginToken: string) => void;
  setFiles: (newFiles: string) => void;
  setUser: (user: User | null) => void; // Add setUser function
}

const useCurentUserStore = create<StoreState>((set) => {
  const initialLoginToken = localStorage.getItem("loginToken") || "";
  const initialUser = JSON.parse(localStorage.getItem("user") || "null"); // Parse stored user JSON

  return {
    selectedContent: "Landing",
    selectedFiles: "Files",
    loginToken: initialLoginToken,
    user: initialUser, // Set initial value for user

    setContent: (newContent) =>
      set((state) => ({ selectedContent: newContent })),

    setLoginToken: (token) => {
      set((state) => ({ loginToken: token }));
      localStorage.setItem("loginToken", token);
    },

    setFiles: (newFiles) =>
      set((state) => ({ selectedContent: newFiles })),

    setUser: (user) => {
      set((state) => ({ user }));
      localStorage.setItem("user", JSON.stringify(user)); // Store user object as JSON
    },
  };
});

export default useCurentUserStore;
