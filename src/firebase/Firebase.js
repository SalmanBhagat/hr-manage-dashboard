// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAOES_4nbTy_WODy7hzXRSQ-hdNiDPTHM",
  authDomain: "hr-manage-dashboard-aa6d1.firebaseapp.com",
  projectId: "hr-manage-dashboard-aa6d1",
  storageBucket: "hr-manage-dashboard-aa6d1.firebasestorage.app",
  messagingSenderId: "542171844721",
  appId: "1:542171844721:web:5e0ebc716b5a9b7ca60bd0",
  measurementId: "G-4VQ2WV4VEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)