
export const getEnvironments = () => { // usado en jest.setup.js y en config.js

    import.meta.env // trae las variables de entorno que estan en los archivos .env.test y en .env

    return{

        ...import.meta.env
    }
}

// variables de entorno testing y development https://www.udemy.com/course/react-cero-experto/learn/lecture/32473190#questions
// configurar variables de entorno https://www.udemy.com/course/react-cero-experto/learn/lecture/32473400?start=225#questions
