import { CircularProgress, Grid } from "@mui/material"

export const CheckingAuth = () => {  // usado en AppRouter.jsx
    

  return (

    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={ { minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 } } // primary.main desde purpleTheme.js
      >

{/* // este es el icono de cargando color naranja en login, ocurre cuando if ( status === 'checking' ) return <CheckingAuth/> */}
        <Grid container
            direction='row'
            justifyContent='center'
            sx={ { width: { sm: 450 } } } >
            <CircularProgress color="warning"/>

        </Grid>

    </Grid>

  )
}

// checking authentication https://www.udemy.com/course/react-cero-experto/learn/lecture/32298388?start=15#questions
