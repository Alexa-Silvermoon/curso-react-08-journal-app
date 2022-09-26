import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';

export const store = configureStore({

  reducer: {

    auth: authSlice.reducer, // name: 'auth',

  },

});

// configurando redux en nuestra aplicacion https://www.udemy.com/course/react-cero-experto/learn/lecture/20079242#questions
// configurar authSlice https://www.udemy.com/course/react-cero-experto/learn/lecture/32295280#questions
