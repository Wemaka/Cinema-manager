import PropTypes from 'prop-types'
import { createContext, useMemo } from 'react'
import { useScreenings } from '../hooks/useScreenings'

const ScreeningContext = createContext(null)

export function ScreeningContextProvider({ children }) {
  const state = useScreenings()
  // useMemo стабилизирует ссылку, снижая лишние перерисовки.
  const value = useMemo(() => state, [state])

  return (
    <ScreeningContext.Provider value={value}>
      {children}
    </ScreeningContext.Provider>
  )
}

ScreeningContextProvider.propTypes = { children: PropTypes.node.isRequired }

export { ScreeningContext }
