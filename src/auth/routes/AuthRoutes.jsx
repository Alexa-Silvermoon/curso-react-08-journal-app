import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';

export const AuthRoutes = () => {
  return (

    <Routes>
        <Route path='login' element={ <LoginPage/> }/>
        <Route path='register' element={ <RegisterPage/> }/>

        <Route path='/*' element={ <Navigate to="/auth/login"/> }/>
        {/* si usuario NO autenticado intenta navegar a ruta que no exista, se ira al login */}
    </Routes>
  )
}

// configuracion de rutas https://www.udemy.com/course/react-cero-experto/learn/lecture/32284484#questions