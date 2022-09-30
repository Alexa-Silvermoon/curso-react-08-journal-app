import { useEffect, useMemo, useState } from "react";

export const useForm = ( initialForm = {}, formValidations = {} ) => { // formData y  formValidations desde RegisterPage.jsx

  /* 
  const [formState, setFormState] = useState({
      username: '',
      email: '',
      password: ''
  }); 
  */

  const [formState, setFormState] = useState( initialForm );

  const [ formValidation, setFormValidation ] = useState({}); // sera para re dibujar el formulario en caso de un error

  useEffect(() => { // sirve para notificar cambios

    createValidators();

  }, [ formState ] ); // cada vez que cambia el state se dispara el createValidators();

  useEffect(() => { // sirve para notificar cambios

    setFormState( initialForm );

  }, [ initialForm ] ); // cada vez que selecciono una nota (item) en NoteView.jsx en el sidebar se debe mostrar en el html

  // const { username, email, password } = formState;

  const isFormValid = useMemo( () => {

    for ( const formValue of Object.keys( formValidation ) ){ // se extrae indice

      if ( formValidation[ formValue ] !== null ) return false; // si es diferente de null, es decir si tiene errores enviar false,
      // si no tiene errores entonces enviar true

      return true;

    }

  }, [ formValidation ] ); // pendiente al cambio de formValidation

  const  onInputChange  = ( { target } ) => {

      const { name, value } = target;

      setFormState({

          ...formState,
          [ name ]: value // propiedades computadas

      });
  }

  const onResetForm = () => {


    // forma 1:
    /* setFormState({
      username: '',
      email: '',
      password: ''
    }); */

    // forma 2:
    setFormState( initialForm );
    
  }

  const createValidators = () => {

    const formCheckedValues = {};

    for ( const formField of Object.keys( formValidations ) ){ // se extrae los indices

      // console.log( formField );

      const [ fn, errorMessage ] = formValidations[ formField ]; // todo se cumplio? posicion 0, hubo un error? posicion 1

      formCheckedValues[ `${ formField }Valid` ] = fn( formState[ formField ] ) ? null : errorMessage;

      // [ `${ formField }Valid` ] propiedad computada

      // formState valor del formulario en ese formField

      // fn( formState[ formField] ) ? si esa condicion se cumple, no hay problema entonces es null, sino entonce error

    }

    setFormValidation( formCheckedValues );

    // console.log( formCheckedValues );

  }

  return {

    ...formState,
    formState,
    onInputChange,
    onResetForm,

    ...formValidation,
    isFormValid
  }

}

// manejo de errores de formulario en RegisterPage.jsx https://www.udemy.com/course/react-cero-experto/learn/lecture/20097038#questions
// validar desde nuestro custom hook https://www.udemy.com/course/react-cero-experto/learn/lecture/32296938?start=450#questions
// activar una nota para su edicion https://www.udemy.com/course/react-cero-experto/learn/lecture/32313914#questions
