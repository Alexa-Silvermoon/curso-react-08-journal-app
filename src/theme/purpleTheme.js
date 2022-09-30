import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({ // usado en AppTheme.jsx

    palette: {

        primary: {
            main: '#262254'
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red.A400
        }
    }
});

// loguin page diseño sin layout https://www.udemy.com/course/react-cero-experto/learn/lecture/32284762#questions
// https://www.udemy.com/course/react-cero-experto/learn/lecture/32284834?start=15#questions