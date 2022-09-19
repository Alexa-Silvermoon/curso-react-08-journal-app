import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { NavBar, SideBar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ( { children } ) => {
  return (

    <Box sx={ { display: 'flex' } } >

        {/* Navbar drawerWidth */}
        <NavBar drawerWidth={ drawerWidth }/>

        {/* Sidebar drawerWidth */}
        <SideBar drawerWidth={ drawerWidth }/>

        <Box
            component='main'
            sx={ { flexGrow: 1, p: 3 } } // p de padding en mui, p3 hace que se alejen el grid del NothingSelectedView del Navbar
        >
            {/* Toolbar */}
            <Toolbar/>

            { children } {/* <NothingSelectedView/> o <NoteView/> */}

        </Box>

    </Box>
  )
}

// JournalLayout y JournalPage https://www.udemy.com/course/react-cero-experto/learn/lecture/32284958#questions
// NavBar https://www.udemy.com/course/react-cero-experto/learn/lecture/32285010#questions
// Sidebar https://www.udemy.com/course/react-cero-experto/learn/lecture/32285098#questions
