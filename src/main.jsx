import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { JournalApp } from './JournalApp';
import { store } from './store';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={ store }>

      <BrowserRouter>

        <JournalApp />
      
      </BrowserRouter>

    </Provider>

  </React.StrictMode>
)

// configuracion de rutas https://www.udemy.com/course/react-cero-experto/learn/lecture/32284484#questions
// instalacion de matererial UI mui https://www.udemy.com/course/react-cero-experto/learn/lecture/32284560#questions
// configurando redux en nuestra aplicacion https://www.udemy.com/course/react-cero-experto/learn/lecture/20079242#questions
