import { useCallback, useEffect, useMemo, useState } from 'react'
import { fetchScreenings } from '../services/screeningsApi'
import { ScreeningStatus } from '../constants/constants'

export function useScreenings() {
  const [screenings, setScreenings] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    async function loadScreenings() {
      try {
        const data = await fetchScreenings()
        if (isMounted) setScreenings(data)
      } catch {
        if (isMounted) setError('Не удалось загрузить сеансы. Попробуйте обновить страницу.')
      } finally {
        if (isMounted) setIsLoading(false)
      }
    }

    loadScreenings()
    return () => { isMounted = false }
  }, [])

  const addScreening = useCallback((formData) => {
    const newScreening = {
      id: Date.now(),
      ...formData,
      price: Number(formData.price),
      status: ScreeningStatus.UPCOMING,
    }
    setScreenings((prev) => [newScreening, ...prev])
  }, [])

  const startScreening = useCallback((id) => {
    setScreenings((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: ScreeningStatus.ONGOING } : s)),
    )
  }, [])

  const finishScreening = useCallback((id) => {
    setScreenings((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: ScreeningStatus.FINISHED } : s)),
    )
  }, [])

  const deleteScreening = useCallback((id) => {
    setScreenings((prev) => prev.filter((s) => s.id !== id))
  }, [])

  const clearArchive = useCallback(() => {
    setScreenings((prev) => prev.filter((s) => s.status !== ScreeningStatus.FINISHED))
  }, [])

  const activeScreenings = useMemo(
    () => screenings.filter((s) => s.status !== ScreeningStatus.FINISHED),
    [screenings],
  )

  const finishedScreenings = useMemo(
    () => screenings.filter((s) => s.status === ScreeningStatus.FINISHED),
    [screenings],
  )

  return {
    screenings,
    activeScreenings,
    finishedScreenings,
    isLoading,
    error,
    addScreening,
    startScreening,
    finishScreening,
    deleteScreening,
    clearArchive,
  }
}
