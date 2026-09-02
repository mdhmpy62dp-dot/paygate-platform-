import React from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'

function App() {
  return (
    <div className="app">
      <h1>PayGate</h1>
      <p>商户中心正在初始化</p>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
