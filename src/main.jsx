import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/producto.css'
import Producto from './assets/components/Producto.jsx'
import ListaTareas from './assets/components/ListaTareas.jsx'
import './assets/CSS/index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Producto />    
        <ListaTareas />
    </StrictMode>

)
