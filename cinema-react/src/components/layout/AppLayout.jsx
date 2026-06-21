import { Outlet } from 'react-router-dom'
import { useAppContext } from '../../hooks/useAppContext'
import Footer from './Footer'
import Header from './Header'

function AppLayout() {
  const { theme } = useAppContext()

  return (
    // Тема подмешивается как CSS-класс — управление внешним видом через стили.
    <div className={`app-shell ${theme === 'light' ? 'theme-light' : 'theme-dark'}`}>
      <Header />

      <main className="page-content">
        {/* Outlet рендерит текущую дочернюю страницу для активного маршрута. */}
        <Outlet />
      </main>
      
      <Footer />
    </div>
  )
}

export default AppLayout
