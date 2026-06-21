import { useContext } from 'react'
import { ScreeningContext } from '../context/ScreeningContext'

export function useScreeningContext() {
  const ctx = useContext(ScreeningContext)
  if (!ctx) throw new Error('useScreeningContext must be used inside ScreeningContextProvider')
  return ctx
}
