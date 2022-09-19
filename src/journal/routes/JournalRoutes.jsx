import { Navigate, Route, Routes } from 'react-router-dom';
import { JournaPage } from '../pages/JournaPage';

export const JournalRoutes = () => {
  return (

    <Routes>
        <Route path='/' element={ <JournaPage/> } />

        <Route path='/*' element={ <Navigate to="/"/> } />
        {/* si usuario autenticado intenta navegar a ruta que no exista, se ira al home JournalApp */}
    </Routes>

  )
}
// configuracion de rutas https://www.udemy.com/course/react-cero-experto/learn/lecture/32284484#questions
