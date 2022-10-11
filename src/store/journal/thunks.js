import { async } from "@firebase/util";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload, loadNotes } from "../../helpers";
import { savigNewNote, addNewEmpetyNote, setActiveNote, setNotes, setSaving, updateNote, setPhotosToActiveNote, deleteNoteById } from "./";

export const startNewNote = () => { // usado en JournalPage.jsx

    return async( dispatch, getState ) => {

        /* getState contiene:
        displayName: "alexander martinez"
        email: "alexander.marti.mil@gmail.com"
        errorMessage: null
        photoURL: "https://lh3.googleusercontent.com/a/ALm5wu083Fa7ZxEg_JKtsqhL_KYSWCP2TdfGWkof9VU8=s96-c"
        status: "authenticated"
        uid: "5DixXvzSmCaBvs9UhssboTKmK213"
        */

        dispatch( savigNewNote() );

        const { uid } = getState().auth;

        // console.log( getState() );
        // console.log( 'startNewNote' );

        const newNote = {

          title: '',
          body: '',
          imageUrls: [],
          date: new Date().getTime()

          /* 
          imageUrls: [], // previene error Uncaught TypeError: Cannot read properties of undefined (reading 'map')
          
          react_devtools_backend.js:4026 Warning: Failed prop type: 
          The prop `children` is marked as required in `ForwardRef(ImageList2)`, but its value is `undefined`.
          */
            
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` ) ); // apunta a la bd segun el id del usuario

        const setDocResp = await setDoc( newDoc, newNote ); // dispara la nota a la bd

        // console.log( { newDoc, setDocResp } );

        newNote.id = newDoc.id; // crear propiedad id a newNote

        dispatch( addNewEmpetyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );
    }
}

export const startLoadingNotes = () => { // usado en useCheckAuth.js

  return async( dispatch, getState ) => {

    const { uid } = getState().auth;
    if ( !uid ) throw new Error( 'El UID del usuario no existe' );

    // console.log( { uid } );

    const notes = await loadNotes( uid );
    dispatch( setNotes( notes) );
  }
}

// camino de la nota:  /5DixXvzSmCaBvs9UhssboTKmK213/journal/notes/d7qaRzleOAtslMH6OwEz // `${ uid }/journal/notes/${ note.id }`
export const startSaveNote = () => { // usado en NoteView.jsx

  return async( dispatch, getState ) => {

    dispatch( setSaving() );

    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const noteToFireStore = { ...note }; // exparsir la nota
    delete noteToFireStore.id; // eliminar la propiedad is para no sobre escribirla en la bd
    // console.log( noteToFireStore );

    const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` ); // el camino a la nota en mi bd
    await setDoc( docRef, noteToFireStore, { merge: true } ); // le meto la nota actualizada a la bd pero sin re escribir el id de la nota
    //merge: si hay campos que tengo aqui pero no en la bd, los campos de la bd se mantienen

    dispatch( updateNote( note ) ); // esta note tiene el id

  }
}

export const startUploadingFiles = ( files = [] ) => { // usado en NoteView.jsx

  return async( dispatch ) => {

    dispatch( setSaving() ); // bloquear botones mientras sube las imagenes

    // console.log( files );

    // await fileUpload( files[0] ); // subir imagenes a cloudinary

    const fileUploadPromises = [];

    for ( const file of files ) {

      fileUploadPromises.push( fileUpload( file ) ); // meter los url de las imagenes al arreglo nuevo
      
    }

    const photosUrls = await Promise.all( fileUploadPromises ); 
    // hasta que todo se haya resuelto, no entregar el nuevo arreglo con las url secure_url

    // console.log( photosUrls ); // arreglo de urls

    dispatch( setPhotosToActiveNote( photosUrls ) );


  }
}

export const startDeletingNote = () => { // desde NoteView.jsx

  return async( dispatch, getState ) => {

    const { uid } = getState().auth; // desde store.js
    const { active: note } = getState().journal; // desde store.js

    // console.log( { uid, note } );

    const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` ); // el camino a la nota en mi bd

    const resp = await deleteDoc( docRef ); // deleteDoc es propio de firebase, es para eliminar notas en Cloud Firestore
    // si funciona bien devuelve un void
    // console.log( { resp } );

    dispatch( deleteNoteById( note.id ) ); // elimina la nota en mi app


  }


}

// crear una nueva nota: https://www.udemy.com/course/react-cero-experto/learn/lecture/20125334?start=15#questions
// activar la nota creada: https://www.udemy.com/course/react-cero-experto/learn/lecture/20125338?start=315#questions
// cargando notas de Firesotore https://www.udemy.com/course/react-cero-experto/learn/lecture/20126428#questions
// actualizar la nota actual https://www.udemy.com/course/react-cero-experto/learn/lecture/20143640?start=600#questions
// subir imagen a cloudinary https://www.udemy.com/course/react-cero-experto/learn/lecture/20146350#questions
// subiendo secure_url a Cloud Firestore https://www.udemy.com/course/react-cero-experto/learn/lecture/32313754#questions
// borrar una nota https://www.udemy.com/course/react-cero-experto/learn/lecture/20147484?start=15#questions


// Estructura de mi bd en Cloud Firestore
/* 
ID de la coleccion: id-user-1 ( id de usuario )
ID de documento: journal      ( nuestra app )

Iniciar coleccion:
ID de la coleccion: notes
ID de documento (ID automatico)

Agregar campo:
Campo         = Tipo     Valor
titulo          string   hola alexander

Agregar campo:
Campo         = Tipo     Valor
body          string   hola de nuevo

Agregar campo:
Campo         = Tipo    Valor
date            number   12345678

---------------------------------------------------------------------------

5 - Cloud Firestore me va generando el path de mis notas, en mi caso el mio es:

/id-user-1/journal/notes/Ku0pITqo4EMOQbSvPrZR

esto sera vital ya que tendre el id de cada nota

---------------------------------------------------------------------------

// crear una nueva nota: https://www.udemy.com/course/react-cero-experto/learn/lecture/20125334?start=15#questions

6 - para grabar datos desde mi app en visual studio code debemo modificar las reglas
de Cloud Firestore, para ello nos vamos a Fire Database>Reglas y debe quedar asi:

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}

y le damos al boton de "publicar"
de esa forma estamos dejando pasar las peticiones si la request es diferente de null

si todo salio bien, ya se habra creado una nueva entrada en la bd, como resultado 
de haber disparado desde visual studio code

si queremos confirmar aun mas, podemos ir a la consola de chrome y a la pestaña de redux
en chrome y veremos el disparo de nuestra nota

------------------------------------------------------------------------------------

*/