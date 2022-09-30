import { ImageList, ImageListItem } from '@mui/material';

export const ImageGallery = ( { images } ) => { // usado en NoteView.jsx

  // if(!images) return;
  /* 
  react_devtools_backend.js:4026 Warning: Failed prop type: 
  The prop `children` is marked as required in `ForwardRef(ImageList2)`, but its value is `undefined`.
  */

  return (

    <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={200}>

      {images.map( ( image ) => (

        <ImageListItem key={ image }>

          <img
            src={`${ image }?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${ image }?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={ 'imagen de la nota' }
            loading="lazy"
          />

        </ImageListItem>

      ))}

    </ImageList>

  );

}


// https://mui.com/material-ui/react-image-list/
// ImageList https://www.udemy.com/course/react-cero-experto/learn/lecture/32285182?start=15#questions
// mostrar imagenes cargadas https://www.udemy.com/course/react-cero-experto/learn/lecture/32313830#questions
