import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { startLoadingNotes } from "../store/journal";

export const useCheckAuth = () => { // hacia AppRouter.jsx

    const { status } = useSelector( state => state.auth ); // trae el state desde authSlice.js
    const dispatch = useDispatch();
    
    useEffect(() => {

        onAuthStateChanged( FirebaseAuth, async( user ) => { // FirebaseAuth trae al usuario

            // console.log( user );

            if ( !user ) return dispatch( logout() ); // si usuario no autenticado, entonces salir de la app

            const { uid, email, displayName, photoURL } = user;

            dispatch( login( { uid, email, displayName, photoURL } ) ); // usuario si autenticado
            dispatch( startLoadingNotes() );

        })

    }, []); // en este caso no fue necesario una dependencia

    return status;
    
}

// custom hook para autenticacion https://www.udemy.com/course/react-cero-experto/learn/lecture/32298508#questions
// cargando notas de Firesotore https://www.udemy.com/course/react-cero-experto/learn/lecture/20126428#questions
