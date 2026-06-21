import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppProviders from './app/AppProviders.jsx'

// Точка входа в приложение.
// Здесь React "подключается" к DOM-узлу #root из index.html.
createRoot(document.getElementById('root')).render(
  // StrictMode в dev-режиме помогает раньше заметить потенциальные проблемы:
  // небезопасные сайд-эффекты, устаревшие паттерны и т.д.
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
)
