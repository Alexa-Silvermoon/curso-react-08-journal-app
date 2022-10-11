import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({

    name: 'journal',

    initialState: {

        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null, // nota activa o null
        /* active: {

            id: 'ABC123',
            title: '',
            body: '',
            date: 12345678,
            imageUrls: [], // https://foto1.jpg, https://foto2.jpg, https://foto3.jpg,
        } */
    },

    reducers: { // se usan en thunks.js   state es el estado inicial , el action es lo que reciben desde el thunks.js

        savigNewNote: ( state, action ) => {  // usado en boton de JournalPage.jsx y thunks.js

            state.isSaving = true;

        },
        addNewEmpetyNote: ( state, action ) => {  // usado en thunks.js

            state.notes.push( action.payload );
            state.isSaving = false;

        },
        setActiveNote: ( state, action ) => { // usado en sideBarItem.jsx, thunks.js, NoteView.jsx

            state.active = action.payload;
            state.messageSaved = '';

        },
        setNotes: (  state, action ) => { // usado en thunks.js

            state.notes = action.payload


        },
        setSaving: (  state, action ) => { // usado en thunks.js

            state.isSaving = true;
            state.messageSaved = '';

        },
        updateNote: (  state, action ) => { // usado en thunks.js

            state.isSaving = false;
            state.notes = state.notes.map( note => {

                if ( note.id === action.payload.id ){

                    return action.payload; // actualiza la nota en el sidebar al presionar boton guardar
                }

                return note;
            });

            state.messageSaved = `${ action.payload.title }, fue actualizada correctamente`;

        },
        setPhotosToActiveNote: (  state, action ) => { // usado en thunks.js

            state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
            // ...state.active.imageUrls conserva las imagenes anteriores
            // ...action.payload agrega las nueva imagenes

            state.isSaving = false; // vuelve a habilitar los botones

        },
        clearNotesLogout: (  state ) => { // usado en thunks.js ,  purgar despues al hacer logout de la app

            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;

        },
        deleteNoteById: (  state, action ) => { // usado en thunks.js

            state.active = null;
            state.notes = state.notes.filter( note => note.id !== action.payload ); // id viene en el action

        }
    }
});

// Action creators are generated for each case reducer function
export const {

    savigNewNote,
    addNewEmpetyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    setPhotosToActiveNote,
    clearNotesLogout,
    deleteNoteById 
    
} = journalSlice.actions; // usado en store.js

// journalSlice.js https://www.udemy.com/course/react-cero-experto/learn/lecture/32310794#questions
// crear una nueva nota: https://www.udemy.com/course/react-cero-experto/learn/lecture/20125334?start=15#questions
// activar la nota creada: https://www.udemy.com/course/react-cero-experto/learn/lecture/20125338?start=315#questions
// actualizar la nota actual https://www.udemy.com/course/react-cero-experto/learn/lecture/20143640?start=600#questions

// sweetAlert 2 https://www.udemy.com/course/react-cero-experto/learn/lecture/32313546#questions
// https://sweetalert2.github.io/#download
// subiendo secure_url a Cloud Firestore https://www.udemy.com/course/react-cero-experto/learn/lecture/32313754#questions
// limpiar notas al cerrar sesion, purgar logout https://www.udemy.com/course/react-cero-experto/learn/lecture/32349356#questions/17924254
// borrar una nota https://www.udemy.com/course/react-cero-experto/learn/lecture/20147484?start=15#questions
