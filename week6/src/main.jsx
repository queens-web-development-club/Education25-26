import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Import BrowserRouter to enable routing
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Render the app into the HTML element 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
