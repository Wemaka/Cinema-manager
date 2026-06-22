import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import ScreeningsPage from './pages/ScreeningsPage'
import ArchivePage from './pages/ArchivePage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<ScreeningsPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/screenings" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
