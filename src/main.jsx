import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/producto.css'
import Producto from './assets/components/Producto.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Producto />    
    </StrictMode>

)
