import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => { // usado en thunks.js

    try {
        
        const result = await signInWithPopup( FirebaseAuth, googleProvider ); // ventana emergente de google para login

        /* // trae unods datos sobre accestoken, idtoken, ken entre otras cosas 
        const credentials = GoogleAuthProvider.credentialFromResult( result );
        console.log( credentials ); 
        */

        // const user = result.user;
        // console.log( { user } ); //displayName, email, uid, photoURL

        const { displayName, email, photoURL, uid } = result.user; // datos que me interesan del usuario

        return {

            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }


    } catch (error) {

        console.log( error );

        const errorCode = error.code;
        const errorMessage = error.message;

        return {

            ok: false,
            errorCode,
            errorMessage
        }
        
    }
}

export const registerUserWithEmailPassword = async( { email, password, displayName } ) => {
    // crear usuario en firebase sin google sign-in

    try {

        // console.log( { email, password, displayName } );

        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password ); // createUserWithEmailAndPassword es propio de firebase
        const { uid, photoURL } = resp.user;
        // console.log( resp );

        //TODO: actualizar el displayName en Firebase
        await updateProfile( FirebaseAuth.currentUser, { displayName } );

        return{

            ok: true,
            uid, photoURL, email, displayName
        }

        
    } catch (error) {

        console.log( error );
        return{ ok: false, errorMessage: error.message }
        // return{ ok: false, errorMessage: 'mensaje de error personalizado' }
        
    }

}

export const loginWithEmailPassword = async( { email, password } ) => { //TODO: hacer el login manual del usuario

    
    try {

        // console.log( { email, password } );
        
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password ); // signInWithEmailAndPassword es propio de firebase
        const { uid, photoURL, displayName } = resp.user; // no poner email aqui ya que sale error can not acces before initialization
        // console.log( resp );

        return{

            ok: true,
            uid, photoURL, displayName
        }

    } catch (error) {

        console.log( error );
        return{ ok: false, errorMessage: error.message }
        
    }
}

export const logoutFirebase = async() => { // usando en thunks.js

    return await FirebaseAuth.signOut(); // cierra sesion de google y firebase
    // FirebaseAuth.signOut(); son propios de firebase

}

// configuracion inicial de firebase https://www.udemy.com/course/react-cero-experto/learn/lecture/20081730?start=45#questions
// google sign-in - firebase https://www.udemy.com/course/react-cero-experto/learn/lecture/32296088#questions
// crear usuario con email y password https://www.udemy.com/course/react-cero-experto/learn/lecture/32297710#questions
// actualizar displayName y autenticar el usuario https://www.udemy.com/course/react-cero-experto/learn/lecture/32297916#questions
// tarea login de usuario https://www.udemy.com/course/react-cero-experto/learn/lecture/32298114#questions
// logout en firebase https://www.udemy.com/course/react-cero-experto/learn/lecture/20120432#questions
