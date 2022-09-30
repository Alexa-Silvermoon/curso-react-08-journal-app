// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZbzN8FQelNHNpt-AYzVrqSW_zORhxnz0",
  authDomain: "react-curso-udemy-alexander.firebaseapp.com",
  projectId: "react-curso-udemy-alexander",
  storageBucket: "react-curso-udemy-alexander.appspot.com",
  messagingSenderId: "227185139640",
  appId: "1:227185139640:web:b2221571bcee80d245b94d"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp ); // usado en providers.js
export const FirebaseDB = getFirestore( FirebaseApp );

// configuracion inicial de firebase https://www.udemy.com/course/react-cero-experto/learn/lecture/20081730?start=45#questions
// google sign-in - firebase https://www.udemy.com/course/react-cero-experto/learn/lecture/32296088#questions
