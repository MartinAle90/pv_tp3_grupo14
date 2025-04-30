import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Producto from './assets/components/Producto.jsx'
import ListaTareas from './assets/components/ListaTareas.jsx'
import Tasks from './assets/components/Tasks.jsx'
import Tarea from './assets/components/Tarea.jsx'
import './assets/css/Tasks.css'
import './assets/css/Producto.css'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Producto />    
        <Tarea />
    </StrictMode>
    

)
