import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (

    <AuthLayout title="Login">

          <form>
            <Grid container>
              <Grid item xs={ 12 } sx={ { mt: 2 } } > {/* xs en pantallas pequeñas toma todo el ancho posible */ } {/* sx en pantallas medianas toma todo el ancho posible */ }
                <TextField  label="Correo"
                            type="email"
                            placeholder="tu correo aqui"
                            fullWidth/> {/* fullWidth hace que el input se extienda todo dentro a lo ancho del form */}
              </Grid>

              <Grid item xs={ 12 } sx={ { mt: 2 } }>
                <TextField  label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth/> {/* fullWidth hace que el input se extienda todo dentro a lo ancho del form */}
              </Grid>

              {/* xs12 pantallas pequeñas, sm6 pantallas medianas (monitor pc) */}

              <Grid container spacing={ 2 } sx={ { mb: 2, mt: 1 } } > {/* botones no quedan tan pegados del contraseña */}
                <Grid item xs={ 12 } sm={ 6 }>
                  <Button variant='contained' fullWidth>
                    Login
                  </Button>
                </Grid>

                <Grid item xs={ 12 } sm={ 6 }>
                  <Button variant='contained' fullWidth>
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
