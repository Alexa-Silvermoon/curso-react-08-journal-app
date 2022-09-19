import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { JournalApp } from './JournalApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>

      <JournalApp />
    
    </BrowserRouter>
  </React.StrictMode>
)

// configuracion de rutas https://www.udemy.com/course/react-cero-experto/learn/lecture/32284484#questions
// instalacion de matererial UI mui https://www.udemy.com/course/react-cero-experto/learn/lecture/32284560#questions
