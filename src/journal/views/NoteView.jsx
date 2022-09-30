import { useMemo, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"

import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'

import { ImageGallery } from "../components"
import { useForm } from "../../hooks/useForm"
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal"

export const NoteView = () => { // usado en JournaPage.jsx

    const dispatch = useDispatch();

    const { active:note, messageSaved, isSaving } = useSelector( state => state.journal ); // apunta a la store.js

    const { body, title, date, onInputChange, formState } = useForm( note );

    const dateString = useMemo( () => {

        const newDate = new Date( date ); // tomar la fecha

        return newDate.toLocaleString(); // convertirla a string 27/9/2022, 7:58:14 toLocaleString()

    }, [ date ] ); // dependencia date

    const fileInputRef = useRef(); // sirve para los dos botones que suben imagenes a cloudinary

    useEffect(() => {

        dispatch( setActiveNote( formState ) ); // percibir cualquier cambio en la nota activa

    }, [ formState ] );

    useEffect(() => {

        if ( messageSaved.length > 0 ){

            Swal.fire('Nota actualizada', messageSaved, 'success'); // alerta cuando se actualiza la nota
        }

    }, [ messageSaved ] );

    const onSaveNote = () => {

        dispatch( startSaveNote() );
    }

    const onFileInputChange = ( { target } ) => {

        // console.log( target.files );

        if ( target.files === 0 ) return; // para que no dispare ningun proceso ya que no hay imagenes que subir a cloudinary

        dispatch( startUploadingFiles( target.files ) );

        // console.log( 'subiendo archivos' );
    }

    const onDelete = () => {

        dispatch( startDeletingNote() );

    }

  return ( // fontSize tamaño de la letra

    <Grid 
        container 
        direction='row' 
        justifyContent='space-between' 
        alignItems='center' 
        sx={ { mb: 1 } }
        className="animate__animated animate__fadeIn animate__faster"
        >

        <Grid item>
            <Typography fontSize={ 39 } fontWeight="light">{ dateString }</Typography>
        </Grid>

        <Grid item>

            <input /* este boton sera invisible y solo se activara cuando de click al boton IconButton de abajo */
                type="file"
                multiple // para subir multiples archivos
                ref={ fileInputRef } // referencia al html
                onChange={ onFileInputChange } // empieza subida de imagenes a cloudinary
                style={ { display: 'none'}} // se oculta
            />

            <IconButton /* boton para subir archivos a cloudinary */
                color="primary"
                disabled={ isSaving } // mientras se esta subiendo un archivo, no se habilita
                onClick={ () => fileInputRef.current.click() } // activa el boton input de arriba
            >
                <UploadOutlined/>
            </IconButton>

            <Button
                disabled={ isSaving }
                onClick={ onSaveNote } 
                color="primary" 
                sx={ { padding: 2 } } > {/* padding 2 para hacer al boton mas ancho */}
                <SaveOutlined sx={ { fontSize: 30, mr: 1 } } /> {/* mr margin right */}
                GUARDAR
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type="text"
                variant="filled" // color gris dentro del input
                fullWidth
                placeholder="Ingrese un titulo"
                label="Titulo"
                sx={ { border: 'none', mb: 1 } } // margin buttom separa el textField de arriba del de abajo
                name="title"
                value={ title } // pone el titulo de la nota en el html
                onChange={ onInputChange }
            />

            <TextField
                type="text"
                variant="filled" // color gris dentro del input
                fullWidth // input a lo ancho de toda la pantalla
                multiline // escritura multi linea
                placeholder="Evento del Dia"
                label="Body"
                minRows={ 5 }
                name="body"
                value={ body } // pone el titulo de la nota en el html
                onChange={ onInputChange }
            />
        </Grid >

        <Grid container justifyContent='end'> {/*  end para alinear a la derecha similar a los margin */}
            <Button
                onClick={ onDelete }
                sx={ { mt: 2 } }
                color="error"
            >
                <DeleteOutline/>
                Borrar
            </Button>
        </Grid>

        {/* Galeria de Imagenes */}
        <ImageGallery images={ note.imageUrls }/>

        {/* {note.imageUrls && <ImageGallery images={note.imageUrls} />} */}
        {/* alternativa al error Uncaught TypeError: Cannot read properties of undefined (reading 'map') */}

    </Grid>
  )
}
// NoteView https://www.udemy.com/course/react-cero-experto/learn/lecture/32285164#questions/17992886
// activar una nota para su edicion https://www.udemy.com/course/react-cero-experto/learn/lecture/32313914#questions

// sweetAlert 2 https://www.udemy.com/course/react-cero-experto/learn/lecture/32313546#questions
// https://sweetalert2.github.io/#download

// seleccionar archivos desde react https://www.udemy.com/course/react-cero-experto/learn/lecture/32313692#questions
// subir imagen a cloudinary https://www.udemy.com/course/react-cero-experto/learn/lecture/20146350#questions

// mostrar imagenes cargadas https://www.udemy.com/course/react-cero-experto/learn/lecture/32313830#questions
// borrar una nota https://www.udemy.com/course/react-cero-experto/learn/lecture/20147484?start=15#questions
