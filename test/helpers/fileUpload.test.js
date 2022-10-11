import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({

    cloud_name: 'alexa-silvermoon',
    api_key: '587731511429218',
    api_secret: '_UqexbJ1ZFKfal1HIhUDw9kqj6w',
    secure: true
});

describe('pruebas en fileUpload.js', () => {

    test('debe de subir el archivo correctamente a cloudinary', async() => {

        const imageUrl = 'https://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/10-Free-To-Use-CORS-Proxies-1024x768.png';
        const resp = await fetch( imageUrl );
        // console.log( resp );
        const blob = await resp.blob(); // blob sirve para crear el archivo mas adelante
        const file = new File( [ blob ], 'fotoTestJest.jpg' ); // archivo, nombre de archivo con su extension

        const url = await fileUpload( file );
        expect( typeof url ).toBe( 'string' );

        console.log( url );
        // https://res.cloudinary.com/alexa-silvermoon/image/upload/v1664713330/react-journal-folder/nkr3hcjczbjhhivzzo19.png

        const segments = url.split('/'); // dividir el link baso en los /
        const imageId = segments[ segments.length - 1 ].replace( '.png', '' );
        console.log( { imageId } ); // nkr3hcjczbjhhivzzo19

        const cloudResp = await cloudinary.api.delete_resources( [ 'react-journal-folder/' + imageId ], {

            resource_type: 'image' // se asegura de que solo borraremos algo que sea una imagen

        } ); // borrar imagen de cloudinary en base al id del url
        console.log( { cloudResp } );

        // respuesta esperada desde cloudinary
        /* 
        {
            cloudResp: {
                deleted: { 'react-journal-folder/ficiemjaeru2hshjc8ms': 'deleted' },
                deleted_counts: { 'react-journal-folder/ficiemjaeru2hshjc8ms': [Object] },
                partial: false,
                rate_limit_allowed: 500,
                rate_limit_reset_at: 2022-10-02T13:00:00.000Z,
                rate_limit_remaining: 495
            }
        }
        */
    });

    test('debe de retornal null en caso de error', async() => {

        const file = new File( [], 'fotoTestJest.jpg' );
        const url = await fileUpload( file );
        expect( url ).toBe( null );

    });
});

// pruebas de carga de archivos a cloudinary https://www.udemy.com/course/react-cero-experto/learn/lecture/20204416#questions
// cloudinary SDK - delete image https://www.udemy.com/course/react-cero-experto/learn/lecture/20205002#questions
// https://cloudinary.com/documentation/admin_api#delete_resources

// depencias de desarrolado instaldas en consola
// yarn add -D cloudinary
// yarn add -D setimmediate

// en el archivo jest.setup.js debe quedar asi:
// import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
// import 'setimmediate';
