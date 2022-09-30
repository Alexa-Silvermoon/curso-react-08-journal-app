import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Typography } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { startNewNote } from "../../store/journal"

export const JournaPage = () => {

  const dispatch = useDispatch();

  const { isSaving, active } = useSelector( state => state.journal ); // useSelector apunta a la store.js

  const onClickNewNote = () => {

    dispatch( startNewNote() ); // agregar nota " + "


  }

  return (

    <JournalLayout>

      {/* <Typography>xddddd</Typography> */}

      {
        ( !!active ) ? <NoteView/> : <NothingSelectedView/> /* !! convierte valor a boolean  state.active */
      }

      {/* NothingSelected */}
      {/* <NothingSelectedView/> */}

      {/* NoteView */}
      {/* <NoteView/> */}

      <IconButton 
        onClick={ onClickNewNote }
        size='large'
        disabled={ isSaving }
        sx={ { 
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 }, // al posicionar el mouse sobre el boton, se vuelve ligeramente trasnparente
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={ { fontSize: 30 } } /> {/* simbolo  + en el boton */}
      </IconButton>

    </JournalLayout>
  )
}
// configuracion de mui con vite https://www.udemy.com/course/react-cero-experto/learn/lecture/32284608?start=75#questions
// JournalLayout y JournalPage https://www.udemy.com/course/react-cero-experto/learn/lecture/32284958#questions
// NothingSelectedView - no hay nada seleccionado https://www.udemy.com/course/react-cero-experto/learn/lecture/32285152#questions
// boton flotante https://www.udemy.com/course/react-cero-experto/learn/lecture/32285224#questions
// crear una nueva nota: https://www.udemy.com/course/react-cero-experto/learn/lecture/20125334?start=15#questions
// activar la nota creada: https://www.udemy.com/course/react-cero-experto/learn/lecture/20125338?start=315#questions
