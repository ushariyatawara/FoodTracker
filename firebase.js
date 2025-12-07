// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzKQy8-GtTc5ICO0TFqSpi6x1AMLHPQFw",
  authDomain: "foodtracker-77d2d.firebaseapp.com",
  projectId: "foodtracker-77d2d",
  storageBucket: "foodtracker-77d2d.firebasestorage.app",
  messagingSenderId: "1037551171751",
  appId: "1:1037551171751:web:1faa06fead98dc10530382",
  measurementId: "G-L2SQDT1GSW"
};


// Initialize firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);