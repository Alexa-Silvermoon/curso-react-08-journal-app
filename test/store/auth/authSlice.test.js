import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { authenticatedState, demoUser, initialState, notAuthenticatedState } from "../../fixtures/authFixtures";

describe('pruebas en el authSlice.js', () => {

    test('debe de regresar el estado inicial y llamarse "auth" ', () => {

        const state = authSlice.reducer( initialState, {} );
        console.log( state ); // estado inicial

        expect( state ).toEqual( initialState );
        // verificar que el estado inicial que se recibe desde authSlice.js este igual al estado inicial en authFixtures.js

        expect( authSlice.name ).toBe('auth'); // name: 'auth', asi esta en authSlice.js

    });

    test('debe de realizar la autenticacion', () => {

        // console.log( login( demoUser ) );
        const state = authSlice.reducer( initialState, login( demoUser ) );
        console.log( state ); // estado ya autenticado 

        expect( state ).toEqual({

            status: 'authenticated', // 'checking, not-authenticated, authenticated
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null

        });
    });

    test('debe de realizar el logout sin argumentos', () => {

        const state = authSlice.reducer( authenticatedState, logout() );
        console.log( state );

        expect( state ).toEqual({
            
            status: 'not-authenticated', // 'checking, not-authenticated, authenticated
            uid: notAuthenticatedState.uid,
            email: notAuthenticatedState.email,
            displayName: notAuthenticatedState.displayName,
            photoURL: notAuthenticatedState.photoURL,
            errorMessage: undefined // en caso de error al autenticar y hacer logout a la fuerza

        });

    });

    test('debe de realizar el logout y mostrar un mensaje de error', () => {

        const errorMessage = 'Credenciales de usuario no son correctas';

        const state = authSlice.reducer( authenticatedState, logout( { errorMessage } ) );
        console.log( state );

        expect( state ).toEqual({
            
            status: 'not-authenticated', // 'checking, not-authenticated, authenticated
            uid: notAuthenticatedState.uid,
            email: notAuthenticatedState.email,
            displayName: notAuthenticatedState.displayName,
            photoURL: notAuthenticatedState.photoURL,
            errorMessage: errorMessage // 'Credenciales de usuario no son correctas'

        });

    });

    test('debe de cambiar el estado a checking', () => {

        const state = authSlice.reducer( authenticatedState, checkingCredentials() );
        console.log( state );

        expect( state.status ).toBe( 'checking' );

    });

});

// pruebas en authSlice.js https://www.udemy.com/course/react-cero-experto/learn/lecture/32470800#questions
// pruebas faltantes en authSlice https://www.udemy.com/course/react-cero-experto/learn/lecture/32470908#questions
