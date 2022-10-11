export const initialState = { // usado en authSlice.test.js

    // status: 'not-authenticated', // 'checking, not-authenticated, authenticated
    status: 'checking', // 'checking, not-authenticated, authenticated
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null

}

export const authenticatedState = { // usado en authSlice.test.js

    // status: 'not-authenticated', // 'checking, not-authenticated, authenticated
    status: 'authenticated', // 'checking, not-authenticated, authenticated
    uid: '123ABC',
    email: 'alexander.marti.mil@gmail.com',
    displayName: 'Alexander Demo User',
    photoURL: 'https://demo.jpg',
    errorMessage: null
    
}

export const notAuthenticatedState = { // usado en authSlice.test.js y LoginPage.test.jsc

    // status: 'not-authenticated', // 'checking, not-authenticated, authenticated
    status: 'not-authenticated', // 'checking, not-authenticated, authenticated
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
    
}

export const demoUser = { // usado en authSlice.test.js

    uid: '123ABC',
    email: 'alexander.marti.mil@gmail.com',
    displayName: 'Alexander Demo User',
    photoURL: 'https://demo.jpg',

}

// pruebas faltantes en authSlice https://www.udemy.com/course/react-cero-experto/learn/lecture/32470908#questions
