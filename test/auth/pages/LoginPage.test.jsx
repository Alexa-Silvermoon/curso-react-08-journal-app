import { fireEvent, render, screen } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { authSlice, startGoogleSignIn, startLoginWithEmailPassword } from "../../../src/store/auth";
import { notAuthenticatedState } from "../../fixtures/authFixtures";

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock("../../../src/store/auth/thunks", () => ({

    startGoogleSignIn: () => mockStartGoogleSignIn,
    startLoginWithEmailPassword: ( { email, password } ) => {

        return () => mockStartLoginWithEmailPassword( { email, password } );
    },

}));

jest.mock('react-redux', () => ({

    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn(), // cuando se llama el useDispatch, recibe una funcion y manda a llamar esa funcion
}));

const store = configureStore({

    reducer: {

        auth: authSlice.reducer
    },
    preloadedState: {

        auth: notAuthenticatedState
    }

});

describe('pruebas en LoginPage.jsx', () => {

    beforeEach( () => jest.clearAllMocks() ); // limpiar todos los mocks

    test('debe de mostrar el componente correctamente', () => {

        render(

            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>

        );

        // screen.debug(); // muestra en consola lo que se esta renderizando

        expect( screen.getAllByText( 'Login' ).length ).toBeGreaterThanOrEqual( 1 ); // debe de existir por lo menos una palabra Login ahi

    });

    test('boton de google debe de llamar el startGoogleSignIn', () => {

        render(

            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>

        );

        console.log( store.getState() ); // status: 'not-authenticated',

        // screen.debug();

        const googleBtn = screen.getByLabelText('google-btn'); // captura del boton gracias al aria-label='google-btn'
        // console.log( googleBtn );

        fireEvent.click( googleBtn ); // hacer click en el boton

        console.log( store.getState() ); //  status: 'checking',

        expect( mockStartGoogleSignIn ).toHaveBeenCalled(); // se espera que haya sido llamado

    });

    // FIXME: nunca pude hacer funcionar el test submit debe de llamar startLoginWithEmailPassword
    test('submit debe de llamar startLoginWithEmailPassword', () => {

        const email = 'alexander2@gmail.com'
        const password = '123456'

        render(

            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>

        );

        // screen.debug();

        const emailField = screen.getByRole('textbox', { name: 'Correo' } ); // label="Correo"
        // console.log( emailField );
        fireEvent.change( emailField, { target: { name: 'email', value: email } } ); // name='email'

        const passwordField = screen.getByTestId('password'); // inputProps={ { 'data-testid': 'password' } }
        // console.log( passwordField );
        fireEvent.change( passwordField, { target: { name: 'password', value: password } } );

        const loginForm = screen.getByLabelText('submit-form'); // aria-label='submit-form' 
        fireEvent.submit( loginForm );

        expect( mockStartLoginWithEmailPassword ).toHaveBeenCalledWith({

            email: email,
            password: password

        });


    });
});

// pruebas en LoginPage.jsx https://www.udemy.com/course/react-cero-experto/learn/lecture/32483666#questions
// boton de google debe de llamar startGoogleSignIn https://www.udemy.com/course/react-cero-experto/learn/lecture/32484290?start=15#questions
// mock de useDispatch y startGoogleSignIn https://www.udemy.com/course/react-cero-experto/learn/lecture/32484576#questions
// disparar el submit del formulario https://www.udemy.com/course/react-cero-experto/learn/lecture/32484742#questions
// dispatch con valores especificos https://www.udemy.com/course/react-cero-experto/learn/lecture/32484846#questions
