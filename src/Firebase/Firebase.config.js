// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8IdwVI8IY90BKU17ycOMUpIeeF57njW4",
  authDomain: "dragon-news-auth-4f07a.firebaseapp.com",
  projectId: "dragon-news-auth-4f07a",
  storageBucket: "dragon-news-auth-4f07a.firebasestorage.app",
  messagingSenderId: "806695912937",
  appId: "1:806695912937:web:4c983ea370b8c8f8353778"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
