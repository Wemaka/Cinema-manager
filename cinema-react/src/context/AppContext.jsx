import PropTypes from 'prop-types'
import { createContext, useCallback, useMemo, useState } from 'react'

const AppContext = createContext(null)

export function AppContextProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') ?? 'light'
  })

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', next)
      return next
    })
  }, [])

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: toggleTheme,
      appTitle: 'Кинотеатр',
    }),
    [theme],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

AppContextProvider.propTypes = { children: PropTypes.node.isRequired }

export { AppContext }
