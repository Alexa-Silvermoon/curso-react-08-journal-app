import { Grid, Typography } from "@mui/material";

export const AuthLayout = ( { children, title = '' } ) => {
  
  return (

    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={ { minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 } } // primary.main desde purpleTheme.js
      >

        <Grid item
        className="box-shadow"
        xs={ 3 } // en pantallas pequeñas va a tener 3 posiciones
        sx={ { 

          width: { sm: 450 },
          backgroundColor: 'white', 
          padding: 3, 
          borderRadius: 2
        
        } } >

          <Typography variant='h5' sx={ { mb: 1 } } >{ title }</Typography> {/* mb margin botom para que no quede tan pegado */}

          { children }
        </Grid>

    /</Grid>
  )
}

// AuthLayout https://www.udemy.com/course/react-cero-experto/learn/lecture/32284870#questions
// RegisterPage - Diseño https://www.udemy.com/course/react-cero-experto/learn/lecture/32284914#questions
