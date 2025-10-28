import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage.jsx'
import AboutMe from './pages/aboutme.jsx'
import Projects from './pages/projects.jsx'
import Knowledge from './pages/knowledge.jsx'
import Experience from './pages/experience.jsx'
import Certifications from './pages/certifications.jsx'
import Contact from './pages/contact.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/Portafolios/" element={<Homepage />} />
        <Route path="/Portafolios/Aboutme" element={<AboutMe />} />
        <Route path="/Portafolios/Projects" element={<Projects />} />
        <Route path="/Portafolios/Knowledge" element={<Knowledge />} />
        <Route path="/Portafolios/Experience" element={<Experience />} />
        <Route path="/Portafolios/Certifications" element={<Certifications />} />
        <Route path="/Portafolios/Contact" element={<Contact />} />
        {/* Ruta por defecto */}
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  </StrictMode>,
)
