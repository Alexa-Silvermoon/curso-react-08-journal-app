import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"

export const AppRouter = () => {
  return (

    <Routes>

        {/* Login y Registro */}
        <Route path="/auth/*" element={ <AuthRoutes/> } />
        {/* cualquier elemento que entre por /auth se ira a <AuthRoutes */}

        {/* JournalApp */}
        <Route path="/*" element={ <JournalRoutes/> } />
        {/* cualquer ruta que no entre por /auth se ira a <JournalApp */}

    </Routes>

  )
}

// configuracion de rutas https://www.udemy.com/course/react-cero-experto/learn/lecture/32284484#questions
