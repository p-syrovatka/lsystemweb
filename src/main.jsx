import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './views/MainPage.jsx'
import QuickGuidePage from './views/QuickGuidePage.jsx'
import TheoryPage from './views/TheoryPage.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/quickguide" element={<QuickGuidePage />} /> 
        <Route path="/theory" element={<TheoryPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)