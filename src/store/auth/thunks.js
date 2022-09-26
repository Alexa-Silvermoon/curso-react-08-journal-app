import { async } from "@firebase/util";
import { FirebaseAuth } from "../../firebase/config";
import { loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle, logoutFirebase } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = ( email, password ) => {

    return async( dispatch ) => { // autenticacion de usuario a travez del login

        dispatch( checkingCredentials() ); // va a authSlice.js
    }

}

export const startGoogleSignIn = () => { // autenticacion de usuario a travez de Google

    return async( dispatch ) => {

        dispatch( checkingCredentials() ); // va a authSlice.js

        const result = await signInWithGoogle();
        // console.log( { result } );

        if ( !result.ok ) return dispatch( logout( result.errorMessage ) ); // si tuviera un error, se vera en la pestaña de redux

        dispatch( login( result ) ); // si todo sale bien

    }
}

export const startCreatingUserWithEmailPassword = ( { email, password, displayName } ) => { // desde RegisterPage.jsx
    // creacion de usuario sin google pero autenticandose con firebase

    return async( dispatch ) => {

        dispatch( checkingCredentials() ); // va a authSlice.js

        /* const resp = await registerUserWithEmailPassword({ email, password, displayName } );
        console.log( resp ); */

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName } );

        if ( !ok ) return dispatch( logout( { errorMessage } ) ); // si creacion manual de usuario sale mal, saquelo y muestre error

        dispatch( login( { uid, displayName, email, photoURL } ) ); // si todo sale bien

    }

}

export const startLoginWithEmailPassword = ( { email, password } ) => { //TODO: hacer el login manual del usuario

    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await loginWithEmailPassword( { email, password } );

        if ( !result.ok ) return dispatch( logout( result ) ); // no se muestra en redux logout( result.errorMessage

        dispatch( login( result ) );

        /* 
        // la siguiente forma tambien funciona:

        const { ok, uid, displayName, photoURL, errorMessage } = await loginWithEmailPassword( { email, password } );
        if ( !ok ) return dispatch( logout( { errorMessage } ) );
        dispatch( login( { uid, displayName, photoURL, errorMessage } ) );

        */
    }

}

export const startLogout = () => { // usando en Navbar.jsx

    return async( dispatch ) => {

        await logoutFirebase(); // cierra sesion de google y firebase

        dispatch( logout() );
    }
}

// manejo del formulario de login https://www.udemy.com/course/react-cero-experto/learn/lecture/32295454#questions
// configuracion inicial de firebase https://www.udemy.com/course/react-cero-experto/learn/lecture/20081730?start=45#questions
// google sign-in - firebase https://www.udemy.com/course/react-cero-experto/learn/lecture/32296088#questions
// disparar accion de autenticacion https://www.udemy.com/course/react-cero-experto/learn/lecture/32296386#questions
// crear usuario con email y password https://www.udemy.com/course/react-cero-experto/learn/lecture/32297710#questions
// actualizar displayName y autenticar el usuario https://www.udemy.com/course/react-cero-experto/learn/lecture/32297916#questions
// tarea login de usuario https://www.udemy.com/course/react-cero-experto/learn/lecture/32298114#questions
// logout en firebase https://www.udemy.com/course/react-cero-experto/learn/lecture/20120432#questions
