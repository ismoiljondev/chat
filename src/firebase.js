import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAq5DP1lkUsrkHiNxieLxs2txV7VSq0Pew",
  authDomain: "chatting-1bdbb.firebaseapp.com",
  projectId: "chatting-1bdbb",
  storageBucket: "chatting-1bdbb.appspot.com",
  messagingSenderId: "475792094528",
  appId: "1:475792094528:web:694f1c77c8bb59a3aeb6a5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
