import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { purpleTheme } from "./";

export const AppTheme = ( { children } ) => { // usado en JournalApp.jsx
  
  return (

    <ThemeProvider theme={ purpleTheme }>

        <CssBaseline/>
        { children } {/* <AppRouter/> */}
    </ThemeProvider>
 
  )
}

// configuracion de mui con vite https://www.udemy.com/course/react-cero-experto/learn/lecture/32284608?start=75#questions
