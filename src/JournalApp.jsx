import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"

export const JournalApp = () => { // usado en main.jsx
  
  return (

    <AppTheme>
      <AppRouter/>
    </AppTheme>
  )
}

// configuracion de rutas https://www.udemy.com/course/react-cero-experto/learn/lecture/32284484#questions
// configuracion de mui con vite https://www.udemy.com/course/react-cero-experto/learn/lecture/32284608?start=75#questions
