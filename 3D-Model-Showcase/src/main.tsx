import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'; // Import Tailwind CSS
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
