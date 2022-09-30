import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { setActiveNote } from "../../store/journal"

export const SideBarItem = ( { title = '', body, id, date, imageUrls = [] } ) => {

    const dispatch = useDispatch()

    const onClickActiveNote = () => {

        dispatch( setActiveNote( { title, body, id, date, imageUrls } ) );

    }

    const newTitle = useMemo( () => {

        return title.length > 17 ? 
            title.substring( 0, 17 ) + '...' // si el titulo tiene mas de 17 caracteres, cortelo y escriba ...
        :
            title; // si el titulo no es tan largo, dejelo quieto

    }, [ title ] ); // dependencia es title

  return (

    <ListItem disablePadding>
        <ListItemButton onClick={ onClickActiveNote } >
            <ListItemIcon> {/* icono pequeño de item */}
                <TurnedInNot/>
            </ListItemIcon>
            <Grid container>
                <ListItemText primary={ newTitle }/>
                <ListItemText secondary={ body }/>
            </Grid>
        </ListItemButton>
    </ListItem>

  )
}

// mostrar las notas en el menu lateral sidebar https://www.udemy.com/course/react-cero-experto/learn/lecture/20127394#questions
// activar una nota https://www.udemy.com/course/react-cero-experto/learn/lecture/20128022#questions
