// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyA-h8lzrSQU08vRUrIR0p_gvWAzvffD4CI",
  authDomain: "otp-nu-com.firebaseapp.com",
  projectId: "otp-nu-com",
  storageBucket: "otp-nu-com.appspot.com",
  messagingSenderId: "868492162952",
  appId: "1:868492162952:web:252cd316b769b3d9be6c3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app};