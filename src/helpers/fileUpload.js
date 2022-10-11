
export const fileUpload = async( file ) => { // usado en thunks.js

    if ( !file ) throw new Error( 'No hay ningun archivo a subir' );

    const cloudUrl = 'https://api.cloudinary.com/v1_1/alexa-silvermoon/image/upload';

    const formData = new FormData(); // ya viene en javascript

    // Body form-data igual que en postman
    formData.append( 'upload_preset', 'react-journal' );
    formData.append( 'file', file );

    try {

        const resp = await fetch( cloudUrl, { // peticion post para subir imagen a cloudinary

            method: 'POST',
            body: formData

        });

        // console.log( resp );
        if ( !resp.ok ) throw new Error( 'Error al subir imagen' ); // si algo salio mal

        const cloudResp = await resp.json();

        // console.log( { cloudResp } );

        return cloudResp.secure_url; // url de cloudinary que lleva hacia la imagen ya subida a cloudinary
        // secure_url sera el link que despues guarde en Cloud Firestore
        
    } catch (error) {

        // console.log( error );
        // throw new Error( error.message );
        return null;
        
    }
}

// subir imagen a cloudinary https://www.udemy.com/course/react-cero-experto/learn/lecture/20146350#questions
// subiendo secure_url a Cloud Firestore https://www.udemy.com/course/react-cero-experto/learn/lecture/32313754#questions
