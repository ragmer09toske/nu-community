"use client"
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
  setContent: (newContent: string) => void;

  selectedFiles: string;
  setFiles: (newFiles: string) => void;
  
  loginToken: string;
  setLoginToken: (loginToken: string) => void;

  user: User | null; // Add user property to StoreState
  setUser: (user: User | null) => void; // Add setUser function

  userID: string; // Add userID property to StoreState
  setUserID: (userID: string) => void; // Add setUserID function

}

const useCurentUserStore = create<StoreState>((set) => {
  let initialLoginToken: any ;
  if (typeof localStorage !== "undefined") {
    // Code that references localStorage
    initialLoginToken = localStorage.getItem("loginToken") || "";
  } else {
    // Handle the case where localStorage is not available
  }

  let initialUserID: any;
  if (typeof localStorage !== "undefined") {
    // Code that references localStorage
    initialUserID = localStorage.getItem("userID") || "";
  } else {
    // Handle the case where localStorage is not available
  }
  let initialUser: any;
  if (typeof localStorage !== "undefined") {
    // Code that references localStorage
    initialUser = JSON.parse(localStorage.getItem("user") || "null"); // Parse stored user JSON
  } else {
    // Handle the case where localStorage is not available
  }
  

  return {
    selectedContent: "Landing",
    selectedFiles: "Files",
    loginToken: initialLoginToken,
    user: initialUser, // Set initial value for user
    userID: initialUserID, // Set initial value for userID

    setContent: (newContent) =>
      set((state) => ({ selectedContent: newContent })),

    setLoginToken: (token) => {
      set((state) => ({ loginToken: token }));
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("loginToken", token);
        // Code that references localStorage
      } else {
        // Handle the case where localStorage is not available
      }
      
    },

    setFiles: (newFiles) =>
      set((state) => ({ selectedContent: newFiles })),

    setUser: (user) => {
      set((state) => ({ user }));
      // Store user object as JSON
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("user", JSON.stringify(user)); 
      } else {
        // Handle the case where localStorage is not available
      }
    },

    setUserID: (userID) => {
      set((state) => ({ userID }));
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("userID", userID); // Store userID in localStorage
        // Code that references localStorage
      } else {
        // Handle the case where localStorage is not available
      }
    },
  };
});

export default useCurentUserStore;