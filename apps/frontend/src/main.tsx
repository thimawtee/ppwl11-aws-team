import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App3 from './App3'
import App2 from './App2'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/classroom" element={<App3 />} />
        <Route path="*" element={<App2 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
