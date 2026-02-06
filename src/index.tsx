import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/globals.css'
import Home from './app/page'
import HomePast from './app/past/page'

const App = window.location.pathname.includes('/past') ? HomePast : Home

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
