import { useSelector } from "react-redux";
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { SideBarItem } from "./SideBarItem";

export const SideBar = ( { drawerWidth = 240 } ) => { // usado en JournalLayout.jsx

    const { displayName } = useSelector( state => state.auth ); // apunta a store.js > authSlice.js
    const { notes } = useSelector( state => state.journal ); // apunta a store.js journalSlice.js
    // console.log( displayName );

  return (

    // sx es styles, sm para pantallas pequeñas
    <Box 
        component='nav'
        sx={ { width: { sm: drawerWidth}, flexShrink: { sm: 0 } } }
    >
        <Drawer /* Drawer es el sidebar en mui */
            variant='permanent' // temporary
            open
            sx={ {

                display: { xs: 'block' }, // se queda fijo independiente del tamaño de la pantalla
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >

            <Toolbar>
                <Typography variant='6' noWrap component='div'>
                    { displayName }
                </Typography>
            </Toolbar>
            <Divider/>

            <List>
                {
                    notes.map( note => (

                        <SideBarItem key={ note.id } { ...note }/>

                        /* 
                        ['item 1','item 2','item 3'].map( text => (

                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={ text }/>
                                    <ListItemText secondary={ 'soy el secondary' }/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                        */

                    ))
                }
            </List>

        </Drawer>

    </Box>
  )
}

// Sidebar https://www.udemy.com/course/react-cero-experto/learn/lecture/32285098#questions
// logout en firebase https://www.udemy.com/course/react-cero-experto/learn/lecture/20120432#questions
// mostrar las notas en el menu lateral sidebar https://www.udemy.com/course/react-cero-experto/learn/lecture/20127394#questions
