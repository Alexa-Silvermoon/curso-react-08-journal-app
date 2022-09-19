import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return ( // fontSize tamaño de la letra

    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={ { mb: 1 } } >
        <Grid item>
            <Typography fontSize={ 39 } fontWeight="light">20 de Enero de 1995</Typography>
        </Grid>

        <Grid item>
            <Button color="primary" sx={ { padding: 2 } } > {/* padding 2 para hacer al boton mas ancho */}
                <SaveOutlined sx={ { fontSize: 30, mr: 1 } } /> {/* mr margin right */}
                GUARDAR
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type="text"
                variant="filled" // color gris dentro del input
                fullWidth
                placeholder="Ingrese un titulo"
                label="Titulo"
                sx={ { border: 'none', mb: 1 } } // margin buttom separa el textField de arriba del de abajo
            />

            <TextField
                type="text"
                variant="filled" // color gris dentro del input
                fullWidth // input a lo ancho de toda la pantalla
                multiline // escritura multi linea
                placeholder="Evento del Dia"
                label="Titulo"
                minRows={ 5 }
            />
        </Grid>

        {/* Galeria de Imagenes */}
        <ImageGallery/>

    </Grid>
  )
}
// NoteView https://www.udemy.com/course/react-cero-experto/learn/lecture/32285164#questions/17992886
