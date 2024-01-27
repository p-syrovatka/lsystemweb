import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './views/MainPage.jsx'
import QuickGuidePage from './views/QuickGuidePage.jsx'
import TheoryPage from './views/TheoryPage.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RouterComp from './router/RouterComp.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <RouterComp />
    </Router>
  </React.StrictMode>,
)