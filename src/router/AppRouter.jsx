import { Navigate, Route, Routes } from "react-router-dom"

import { AuthRoutes } from "../auth/routes/AuthRoutes"

import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui/"
import { useCheckAuth } from "../hooks"

export const AppRouter = () => { // usado en JournalApp.jsx

  const status = useCheckAuth();
  
  if ( status === 'checking' ) return <CheckingAuth/> // icono de cargando color naranja en login

  return (

    <Routes>

      {
        ( status === 'authenticated' ) ? // rutas si protegidas
          <Route path="/*" element={ <JournalRoutes/> } />
        :
          <Route path="/auth/*" element={ <AuthRoutes/> } />
      }

      <Route path="/*" element={ <Navigate to={'/auth/login'} /> }/> {/* si usuario esta en cualquer otra ruta no existente, dirigirlo al login */}



      {/* RUTAS FUNCIONANDO PERO SIN PROTECCION: */}
        {/* Login y Registro */}
        {/* <Route path="/auth/*" element={ <AuthRoutes/> } /> */}
        {/* cualquier elemento que entre por /auth se ira a <AuthRoutes */}

        {/* JournalApp */}
        {/* <Route path="/*" element={ <JournalRoutes/> } /> */}
        {/* cualquer ruta que no entre por /auth se ira a <JournalApp */}

    </Routes>

  )
}

// configuracion de rutas https://www.udemy.com/course/react-cero-experto/learn/lecture/32284484#questions
// checking authentication https://www.udemy.com/course/react-cero-experto/learn/lecture/32298388?start=15#questions
// mantener el estado de la autenticacion https://www.udemy.com/course/react-cero-experto/learn/lecture/20428715#questions
// custom hook para autenticacion https://www.udemy.com/course/react-cero-experto/learn/lecture/32298508#questions
