import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';

/* const formData = { // como initialForm en useForm.js

  email: 'alexander.marti.mil@gmail.com',
  password: '123456',
  displayName: 'Alexander Millan'

} */

const formData = { // como initialForm en useForm.js

  email: '',
  password: '',
  displayName: ''

}

const formValidations = { // validacion personalizada, todas deben cumplirse para permitir el registro

  // guia: [ funcion que se va a evaluar, mensaje de error ]

  email: [ ( value ) => value.includes('@'), 'El correo debe de tener una @'],
  password: [ ( value ) => value.length >= 6, 'La contraseña debe de tener mas de 6 caracteres'],
  displayName: [ ( value ) => value.length >= 1, 'El nombre es obligatorio'],

}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formsubmitted, setFormsubmitted] = useState( false );
  // la primera vez que se muestra el formulario, no aparezca en rojo con mensajes de error

  const { status, errorMessage } = useSelector( state => state.auth ); // saber el estado de autenticacion
  const isCheckingAuthentication = useMemo( () => status === 'checking', [ status ] ); // saber si justo el usuario se esta autenticando

  const { 
    
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid

  } = useForm( formData, formValidations );

  // console.log( displayNameValid );

  const onSubmit = ( event ) => { // al presionar tecla enter

    event.preventDefault(); // prevenir refrescar pagina

    setFormsubmitted( true ); // quita el error en rojo la primera vez que se carga el formulario y los pone en blanco

    if ( !isFormValid ) return false; // si info no es valida, no permite grabar

    // console.log( formState );
    dispatch( startCreatingUserWithEmailPassword( formState ) );

    /* 
    displayName: "Alexander Millan"
    email: "alexander.marti.mil@gmail.com"
    password: "123456"
    */

  }

  return (

    <AuthLayout title="Crear Cuenta">
      {/* <h1>FormValid { isFormValid ? 'Valido' : 'Incorrecto' }</h1> */}

          <form onSubmit={ onSubmit } className="animate__animated animate__fadeIn animate__faster">
            <Grid container>
              <Grid item xs={ 12 } sx={ { mt: 2 } } > {/* xs en pantallas pequeñas toma todo el ancho posible */ } {/* sx en pantallas medianas toma todo el ancho posible */ }
                <TextField  label="Nombre Completo"
                            type="text"
                            placeholder="tu nombre aqui"
                            fullWidth
                            name="displayName"
                            value={ displayName }
                            onChange={ onInputChange }
                            error={ !!displayNameValid && formsubmitted } // se va a mostrar  en rojo si no es valido
                            helperText={ displayNameValid }

                            /> {/* fullWidth hace que el input se extienda todo dentro a lo ancho del form */}
                        
              </Grid>

              <Grid item xs={ 12 } sx={ { mt: 2 } } > {/* xs en pantallas pequeñas toma todo el ancho posible */ } {/* sx en pantallas medianas toma todo el ancho posible */ }
                <TextField  label="Correo"
                            type="email"
                            placeholder="tu correo aqui"
                            fullWidth
                            name="email"
                            value={ email }
                            onChange={ onInputChange }
                            error={ !!emailValid && formsubmitted } // se va a mostrar  en rojo si no es valido
                            helperText={ emailValid }

                            /> {/* fullWidth hace que el input se extienda todo dentro a lo ancho del form */}
              </Grid>

              <Grid item xs={ 12 } sx={ { mt: 2 } }>
                <TextField  label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                            name="password"
                            value={ password }
                            onChange={ onInputChange }
                            error={ !!passwordValid && formsubmitted } // se va a mostrar  en rojo si no es valido
                            helperText={ passwordValid }

                            /> {/* fullWidth hace que el input se extienda todo dentro a lo ancho del form */}
              </Grid>

              {/* xs12 pantallas pequeñas, sm6 pantallas medianas (monitor pc) */}

              <Grid container spacing={ 2 } sx={ { mb: 2, mt: 1 } } > {/* botones no quedan tan pegados del contraseña */}

              <Grid item xs={ 12 } display={ !!errorMessage ? '' : 'none' } > {/* si usuario ya existe, mostrar error, sino ocultar con css */}
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>

                <Grid item xs={ 12 } >
                  <Button disabled={ isCheckingAuthentication } type='submit' variant='contained' fullWidth>
                    Crear Cuenta
                  </Button>
                </Grid>
              </Grid>

              <Grid container direction='row' justifyContent='end'>
                <Typography sx={ { mr: 1 } }>¿Ya tienes una cuenta?</Typography> {/* margin right, espacio entre texto e ingresar */}
                <Link component={ RouterLink } color='inherit' to='/auth/login'>
                  Ingresar
                </Link>
              </Grid>

            </Grid>
          </form>

    </AuthLayout>
  )
}
// loguin page diseño sin layout https://www.udemy.com/course/react-cero-experto/learn/lecture/32284762#questions
// Login Page diseño parte 2 https://www.udemy.com/course/react-cero-experto/learn/lecture/32284834?start=15#questions
// AuthLayout https://www.udemy.com/course/react-cero-experto/learn/lecture/32284870#questions
// RegisterPage - Diseño https://www.udemy.com/course/react-cero-experto/learn/lecture/32284914#questions
// formulario de registro de usuarios https://www.udemy.com/course/react-cero-experto/learn/lecture/20096698?start=15#questions
// manejo de errores de formulario en RegisterPage.jsx https://www.udemy.com/course/react-cero-experto/learn/lecture/20097038#questions
// validar desde nuestro custom hook https://www.udemy.com/course/react-cero-experto/learn/lecture/32296938?start=450#questions
// crear usuario con email y password https://www.udemy.com/course/react-cero-experto/learn/lecture/32297710#questions
// mostrar mensaje de error de autenticacion, usuario ya existe en bd https://www.udemy.com/course/react-cero-experto/learn/lecture/32298034#questions
// animaciones para la aplicacion https://www.udemy.com/course/react-cero-experto/learn/lecture/32298666#questions
