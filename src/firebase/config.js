// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// console.log( import.meta.env ); // acceso a variables de entorno
// console.log( process.env ); // variables de entorno
// console.log( process.env.VITE_HOLA ); // variables de entorno

/* const env = getEnvironments();
console.log( env ); */

// ---------------
// bloque usado en pruebas jest,
// si se activa, bloquea el login con google, no se a que se deba

/* const {

  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,

} = getEnvironments();

const firebaseConfig = { // lo trae desde getEnvironments.js que a su vez lo trae del archivo .env

  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
}; */

// console.log( firebaseConfig );
// ----------------------

// Your web app's Firebase configuration - para App Journal:
const firebaseConfig = {
  apiKey: "AIzaSyCZbzN8FQelNHNpt-AYzVrqSW_zORhxnz0",
  authDomain: "react-curso-udemy-alexander.firebaseapp.com",
  projectId: "react-curso-udemy-alexander",
  storageBucket: "react-curso-udemy-alexander.appspot.com",
  messagingSenderId: "227185139640",
  appId: "1:227185139640:web:b2221571bcee80d245b94d"
};

//para jest testing:
/* const firebaseConfig = {
  apiKey: "AIzaSyCZbzN8FQelNHNpt-AYzVrqSW_zORhxnz0",
  authDomain: "react-curso-udemy-alexander.firebaseapp.com",
  projectId: "react-curso-udemy-alexander",
  storageBucket: "react-curso-udemy-alexander.appspot.com",
  messagingSenderId: "227185139640",
  appId: "1:227185139640:web:e774a5129f1c014745b94d"
}; */

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp ); // usado en providers.js
export const FirebaseDB = getFirestore( FirebaseApp );

// configuracion inicial de firebase https://www.udemy.com/course/react-cero-experto/learn/lecture/20081730?start=45#questions
// google sign-in - firebase https://www.udemy.com/course/react-cero-experto/learn/lecture/32296088#questions
// crear base de datos de testing https://www.udemy.com/course/react-cero-experto/learn/lecture/20207662#questions
// prueba completa sobre insercion y eliminacion de basura en la bd https://www.udemy.com/course/react-cero-experto/learn/lecture/32472766#questions/18013934
// variables de entorno https://www.udemy.com/course/react-cero-experto/learn/lecture/20207664#questions/18013934
// configurar variables de entorno https://www.udemy.com/course/react-cero-experto/learn/lecture/32473400?start=225#questions
