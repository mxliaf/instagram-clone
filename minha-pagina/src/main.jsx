import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import * as bootstrap 
import './Instagram.css'
import App from './App.jsx'
import Instagram from './Instagram.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Instagram />
  </StrictMode>,
)
