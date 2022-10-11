// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
import 'setimmediate';
import { getEnvironments } from './src/helpers/getEnvironments';

require('dotenv').config({

    path: '.env.test'
});

jest.mock('./src/helpers/getEnvironments', () => ({

    // esto se vera cuando ejecutamos el yarn test, podremos ver nuetras variables de entorno en .env.test

    getEnvironments: () => ({ ...process.env } ) // muestra en consola

}));

// variables de entorno testing y development https://www.udemy.com/course/react-cero-experto/learn/lecture/32473190#questions
// configurar variables de entorno https://www.udemy.com/course/react-cero-experto/learn/lecture/32473400?start=225#questions
