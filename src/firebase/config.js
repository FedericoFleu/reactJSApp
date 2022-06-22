// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsS4eLmjf00bDknk4J5-jeMcPfyqTaoCc",
  authDomain: "appreactjs-e1cf2.firebaseapp.com",
  projectId: "appreactjs-e1cf2",
  storageBucket: "appreactjs-e1cf2.appspot.com",
  messagingSenderId: "377714622284",
  appId: "1:377714622284:web:8fb7de142c1bef90fb19e9",
  measurementId: "G-NKKJ4RNVM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);