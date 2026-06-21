import { NavLink } from 'react-router-dom'
import { navigationItems } from '../../constants/navigation'
import { useAppContext } from '../../hooks/useAppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const { theme, toggleTheme, appTitle } = useAppContext()

  return (
    <header className="header">
      <div>
        <h1>{appTitle}</h1>
      </div>

      <nav className="nav">
        {/* Навигация строится из массива конфигурации, а не хардкодом в JSX. */}
        {navigationItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            // NavLink умеет сам сообщать, активен ли маршрут.
            className={({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link')}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      
      <div>
        <button type="button" className="theme-button" onClick={toggleTheme}>
          Тема: {theme === 'light' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
        </button>
      </div>
    </header>
  )
}

export default Header
