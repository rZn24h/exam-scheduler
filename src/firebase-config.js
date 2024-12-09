// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoFKauPWad4AN8Y2waU7S8tath4fdwzcY",
  authDomain: "exam-scheduler-5c99a.firebaseapp.com",
  projectId: "exam-scheduler-5c99a",
  storageBucket: "exam-scheduler-5c99a.firebasestorage.app",
  messagingSenderId: "983680589183",
  appId: "1:983680589183:web:d1c1faa7ba75ce97afce4a",
  measurementId: "G-2N8PMYBZ7T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
