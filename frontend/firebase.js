// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXZvsCnsqLYQjyRcNQp5T5PjdxMpGWAhA",
  authDomain: "sophistique-app.firebaseapp.com",
  projectId: "sophistique-app",
  storageBucket: "sophistique-app.firebasestorage.app",
  messagingSenderId: "110253303094",
  appId: "1:110253303094:web:df4ac69204497d6b82bf97",
  measurementId: "G-2QD2HGKL5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);