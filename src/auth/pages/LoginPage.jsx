import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';

const formData = {

  // esto es necesario ya que sino, genera error debido al segundo useEffect en useForm.js, el error se manifieta en el login

  email: '',
  password: '' 
}

export const LoginPage = () => {

  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector( state => state.auth ); // useSelector apunta a la store.js saber el estado de autenticacion

  // const { email, password, onInputChange } = useForm( /* { email: '', password: '' } */ );
  const { email, password, onInputChange } = useForm( formData );

  const isAuthenticating = useMemo( () => status === 'checking', [ status ] ); // saber si justo el usuario se esta autenticando
  // si status cambia se obtiene un nuevo valor, sino cambia, no se vuelve a calcular, la dependencia es [ status ]

  const onSubmit = ( event ) => { // login manual de usuario

    event.preventDefault(); // prevenir recarga del navegador despues del enter

    console.log( { email, password } );

    dispatch( checkingAuthentication() ); //TODO: hacer el login manual del usuario

    dispatch( startLoginWithEmailPassword( { email, password } ) );

  }

  const onGoogleSignIn = () => { // login de usuario con Google

    console.log('onGoogleSignIn');

    dispatch( startGoogleSignIn() );

  }

  return (

    <AuthLayout title="Login">

          <form onSubmit={ onSubmit } className="animate__animated animate__fadeIn animate__faster">
            {/* animacion por Animate.css */}

            <Grid container>
              <Grid item xs={ 12 } sx={ { mt: 2 } } > {/* xs en pantallas pequeñas toma todo el ancho posible */ } {/* sx en pantallas medianas toma todo el ancho posible */ }
                <TextField  label="Correo"
                            type="email"
                            placeholder="tu correo aqui"
                            fullWidth
                            name='email'
                            value={ email }
                            onChange={ onInputChange }

                            /> {/* fullWidth hace que el input se extienda todo dentro a lo ancho del form */}
              </Grid>

              <Grid item xs={ 12 } sx={ { mt: 2 } }>
                <TextField  label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                            name='password'
                            value={ password }
                            onChange={ onInputChange }

                            /> {/* fullWidth hace que el input se extienda todo dentro a lo ancho del form */}
              </Grid>

              {/* xs12 pantallas pequeñas, sm6 pantallas medianas (monitor pc) */}

              <Grid container spacing={ 2 } sx={ { mb: 2, mt: 1 } } > {/* botones no quedan tan pegados del contraseña */}

              <Grid item xs={ 12 } display={ !!errorMessage ? '' : 'none' } > {/* si usuario ya existe, mostrar error, sino ocultar con css */}
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>

                <Grid item xs={ 12 } sm={ 6 }>
                  <Button disabled={ isAuthenticating } type='submit' variant='contained' fullWidth>
                    Login
                  </Button>
                </Grid>

                <Grid item xs={ 12 } sm={ 6 }>
                  <Button disabled={ isAuthenticating } variant='contained' fullWidth onClick={ onGoogleSignIn }>
                    <Google/>
                    <Typography sx={ { ml: 1 } } >Google</Typography> {/* ml margin left */}
                  </Button>
                </Grid>
              </Grid>

              <Grid container direction='row' justifyContent='end'>
                <Link component={ RouterLink } color='inherit' to='/auth/register'>
                  Crear una cuenta
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
// manejo del formulario de login https://www.udemy.com/course/react-cero-experto/learn/lecture/32295454#questions
// disparar accion de autenticacion https://www.udemy.com/course/react-cero-experto/learn/lecture/32296386#questions
// tarea login de usuario https://www.udemy.com/course/react-cero-experto/learn/lecture/32298114#questions
// animaciones para la aplicacion https://www.udemy.com/course/react-cero-experto/learn/lecture/32298666#questions
// activar una nota para su edicion https://www.udemy.com/course/react-cero-experto/learn/lecture/32313914#questions
