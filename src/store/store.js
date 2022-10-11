import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { journalSlice } from './journal';

export const store = configureStore({

  reducer: {

    auth: authSlice.reducer, // name: 'auth',
    journal: journalSlice.reducer, // name: 'journal',

  },

});

// configurando redux en nuestra aplicacion https://www.udemy.com/course/react-cero-experto/learn/lecture/20079242#questions
// configurar authSlice https://www.udemy.com/course/react-cero-experto/learn/lecture/32295280#questions
// journalSlice.js https://www.udemy.com/course/react-cero-experto/learn/lecture/32310794#questions
