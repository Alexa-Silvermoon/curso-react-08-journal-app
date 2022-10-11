import { collection, deleteDoc, doc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../src/firebase/config";
import { addNewEmpetyNote, savigNewNote, startNewNote } from "../../../src/store/journal";

describe('pruebas en journal thunks', () => {

    const dispatch = jest.fn(); // engañar
    const getState = jest.fn(); // engañar

    beforeEach( () => jest.clearAllMocks() ); // limpiar todos los mocks antes de iniciar los test

    test('startNewNote debe de crear una nueva nota en blanco', async() => {

        // esta prueba no va a pasar ya que la reglas en Cloud Firestore>reglas lo impieden
        // para que la prueba pase, las reglas deben estar de la siguiente forma:
        /* 
        rules_version = '2';
        service cloud.firestore {
            match /databases/{database}/documents {
                match /{document=**} {
                allow read, write: if true
                }
            }
        }
        */

        const uid = 'TEST-UID';

        getState.mockReturnValue( { auth: { uid: uid } } );

        await startNewNote()( dispatch, getState ); // dispatch, getState son los argumentos, asi se argumenta en pruebas jest

        expect( dispatch ).toHaveBeenCalledWith( savigNewNote() );
        expect( dispatch ).toHaveBeenCalledWith( addNewEmpetyNote({

            body: '',
            title: '',
            imageUrls: [],
            id: expect.any( String ), // si yo no se el id exacto, le digo a jest que espere cualquier string
            date: expect.any( Number ) // si yo no se la fecha exacta, le digo a jest que espere cualquier numero

        }) );

        // Borrar de firebase la acumulacion basura:
        const collectionRef = collection( FirebaseDB, `${ uid }/journal/notes` );
        const docs = await getDocs( collectionRef );
        console.log( docs );

        const deletePromises = [];
        docs.forEach( doc => deletePromises.push( deleteDoc( doc.ref ) ) );
        // cicla y elimina las notas en la bd, para ello crea un arreglo de promesas
        await Promise.all( deletePromises ); // espera hasta que el arreglo de promesas este terminado

    });
});

// pruebas en journal thunks https://www.udemy.com/course/react-cero-experto/learn/lecture/32472508#questions/18366648
// crear base de datos de testing https://www.udemy.com/course/react-cero-experto/learn/lecture/20207662#questions
// prueba completa sobre insercion y eliminacion de basura en la bd https://www.udemy.com/course/react-cero-experto/learn/lecture/32472766#questions/18013934
