import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNotes = async( uid = '') => { //se usa en thunks.js

    if ( !uid ) throw new Error( 'El UID del usuario no existe' );

    const collectionRef = collection( FirebaseDB, `${ uid }/journal/notes` );
    const docs = await getDocs( collectionRef ); // trae las nota desde la bd

    // console.log( docs );

    const notes = [];

    docs.forEach( doc => { // las notas ( docs ) se meten en el arreglo notes[]

        // console.log( doc.data );
        notes.push( { id: doc.id, ...doc.data() } );

    });

    // console.log( notes );

    return notes;

}

// cargando notas de Firesotore https://www.udemy.com/course/react-cero-experto/learn/lecture/20126428#questions
