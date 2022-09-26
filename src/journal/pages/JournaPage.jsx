import { IconButton, Typography } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournaPage = () => {
  return (

    <JournalLayout>

      {/* <Typography>xddddd</Typography> */}


      {/* NothingSelected */}
      <NothingSelectedView/>

      {/* NoteView */}
      {/* <NoteView/> */}

      <IconButton 
        size='large'
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
