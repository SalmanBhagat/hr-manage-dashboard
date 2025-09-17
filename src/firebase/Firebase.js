// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCD3uBJPx9sXp5COsVJUVJi7u5tInRsl-I",
  authDomain: "hr-manage-dashboard.firebaseapp.com",
  projectId: "hr-manage-dashboard",
  storageBucket: "hr-manage-dashboard.firebasestorage.app",
  messagingSenderId: "797253157070",
  appId: "1:797253157070:web:ce9d22e87d125c62b5109f",
  measurementId: "G-8L7R0FNREQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)