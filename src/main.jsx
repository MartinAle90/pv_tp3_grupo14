import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import Producto from './assets/components/Producto.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Producto />    
    </StrictMode>

)
