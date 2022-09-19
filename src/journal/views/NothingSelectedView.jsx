import { StarOutline } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (

    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={ { minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 } } // primary.main desde purpleTheme.js
      >
        <Grid item xs={ 12 } >
            <StarOutline sx={ { fontSize: 100, color: 'white' } } /> {/* edicion del icono de la estrella */}
        </Grid>

        <Grid item xs={ 12 } >
            <Typography color="white" variant='h5'>Selecciona o crea una entrada</Typography>
        </Grid>

      </Grid>
  )
}

// NothingSelectedView - no hay nada seleccionado https://www.udemy.com/course/react-cero-experto/learn/lecture/32285152#questions
