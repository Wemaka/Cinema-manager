import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from '../context/AppContext'
import { ScreeningContextProvider } from '../context/ScreeningContext'

function AppProviders({ children }) {
  return (
    // BrowserRouter должен оборачивать всё, где используются Route/NavLink/Link.
    <BrowserRouter>
      {/* Общие настройки интерфейса (тема, заголовок). */}
      <AppContextProvider>
        {/* Данные о сеансах доступны на всех страницах. */}
        <ScreeningContextProvider>{children}</ScreeningContextProvider>
      </AppContextProvider>
    </BrowserRouter>
  )
}

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppProviders
