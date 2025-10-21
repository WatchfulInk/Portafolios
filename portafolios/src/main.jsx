import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './pages/homepage.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Homepage />
  </StrictMode>,
)
