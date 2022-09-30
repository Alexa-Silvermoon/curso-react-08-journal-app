import { useDispatch } from 'react-redux';
import { MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { startLogout } from '../../store/auth/thunks';

export const NavBar = ( { drawerWidth } ) => { // drawerWidth = 240 px desde JournalLayout

    const dispatch = useDispatch();

    const onLogOut = () => {

        // console.log( 'onLogOut' );

        dispatch( startLogout() );

    }

  return (

    <AppBar 
        position='fixed'
        sx={ {
            width: { sm: `calc(100% - ${ drawerWidth }px)` }, // pantallas medianas, calc de calculo (), (navbar no ocupa toda la pantalla)
            ml: { sm: `${ drawerWidth }px` } // margin left en pantallas pequeñas (navbar ocupa toda la pantalla)
        }}
    >
        <Toolbar>
            <IconButton /* boton de las 3 rayitas del navbar */
                color='inherit'
                edge='start'
                sx={ { mr: 2, display: { sm: 'none' } } }
                >
                    
                <MenuOutlined/>
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'>Journal App</Typography>

                <IconButton 
                    color='error'
                    onClick={ onLogOut }
                    > {/* icono de logout color rojo */}
                    {/* <LogoutOutlined/> */}
                    <LogoutIcon/>
                </IconButton>
            </Grid>
        </Toolbar>

    </AppBar>
  )
}

// NavBar https://www.udemy.com/course/react-cero-experto/learn/lecture/32285010#questions
// https://mui.com/material-ui/material-icons/?query=logout
// logout en firebase https://www.udemy.com/course/react-cero-experto/learn/lecture/20120432#questions
// limpiar notas al cerrar sesion, purgar logout https://www.udemy.com/course/react-cero-experto/learn/lecture/32349356#questions/17924254
