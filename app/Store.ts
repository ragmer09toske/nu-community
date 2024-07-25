import { create } from "zustand";

interface User {
  _id: string;
  name: string;
  number: number;
  email: string;
  password: string;
  acount: string;
  organization: string;
  avatar: string;
  __v: number;
}

interface StoreState {
  selectedContent: string;
  setContent: (newContent: string) => void;

  selectedFiles: string;
  setFiles: (newFiles: string) => void;
  
  loginToken: string;
  setLoginToken: (loginToken: string) => void;

  user: User | null;
  setUser: (user: User | null) => void;

  userID: string;
  setUserID: (userID: string) => void;

  likeClicked: boolean; 
  setLikeClicked: (value: boolean) => void; // Function to set the value of likeClicked
}

const useCurrentUserStore = create<StoreState>((set) => {
  let initialLoginToken: any ;
  if (typeof localStorage !== "undefined") {
    initialLoginToken = localStorage.getItem("loginToken") || "";
  }

  let initialUserID: any;
  if (typeof localStorage !== "undefined") {
    initialUserID = localStorage.getItem("userID") || "";
  }

  let initialUser: any;
  if (typeof localStorage !== "undefined") {
    initialUser = JSON.parse(localStorage.getItem("user") || "null");
  }
  
  let initialLikeClicked = false; // Initial value for likeClicked

  return {
    selectedContent: "Landing",
    selectedFiles: "Files",
    loginToken: initialLoginToken,
    user: initialUser,
    userID: initialUserID,
    likeClicked: initialLikeClicked, // Initialize likeClicked with initial value

    setContent: (newContent) =>
      set((state) => ({ selectedContent: newContent })),

    setLoginToken: (token) => {
      set((state) => ({ loginToken: token }));
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("loginToken", token);
      }
    },

    setFiles: (newFiles) =>
      set((state) => ({ selectedContent: newFiles })),

    setUser: (user) => {
      set((state) => ({ user }));
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("user", JSON.stringify(user)); 
      }
    },

    setUserID: (userID) => {
      set((state) => ({ userID }));
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("userID", userID);
      }
    },

    setLikeClicked: (value) => {
      set((state) => ({ likeClicked: value }));
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("likeClicked", JSON.stringify(value));
      }
    },
  };
});

export default useCurrentUserStore;
