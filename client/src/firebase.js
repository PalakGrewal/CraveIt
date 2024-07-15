// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "crave-it-dc062.firebaseapp.com",
  projectId: "crave-it-dc062",
  storageBucket: "crave-it-dc062.appspot.com",
  messagingSenderId: "427961643407",
  appId: "1:427961643407:web:dca33c9c6bd398cb279bfa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);