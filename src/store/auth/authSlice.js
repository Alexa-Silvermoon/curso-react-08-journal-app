import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({ // usado en store.js

    name: 'auth',

    initialState: {

        // status: 'not-authenticated', // 'checking, not-authenticated, authenticated
        status: 'checking', // 'checking, not-authenticated, authenticated
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null

    },

    reducers: {

        login: ( state, { payload } ) => { // usado en thunks.js

            state.status = 'authenticated', // 'checking, not-authenticated, authenticated
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null; // si se autentico sin problema, significa que no hay error


        },
        logout: ( state, { payload } ) => { // usado en thunks.js

            state.status = 'not-authenticated', // 'checking, not-authenticated, authenticated
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload?.errorMessage; // en caso de error al autenticar y hacer logout a la fuerza

        },
        checkingCredentials: ( state ) => { // usado en thunks.js

            state.status = 'checking';

        }
    }

});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions; // usado en store.js

// configurar authSlice https://www.udemy.com/course/react-cero-experto/learn/lecture/32295280#questions
// manejo del formulario de login https://www.udemy.com/course/react-cero-experto/learn/lecture/32295454#questions
// disparar accion de autenticacion https://www.udemy.com/course/react-cero-experto/learn/lecture/32296386#questions
// checking authentication https://www.udemy.com/course/react-cero-experto/learn/lecture/32298388?start=15#questions
// logout en firebase https://www.udemy.com/course/react-cero-experto/learn/lecture/20120432#questions
