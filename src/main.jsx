import React from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import './app.css'

function App() {
  return <Home />
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
