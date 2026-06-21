import { useState } from 'react'
import { useScreeningContext } from '../hooks/useScreeningContext'
import SectionCard from '../components/ui/SectionCard'
import { Loader, ErrorMessage } from '../components/ui/Feedback'
import ScreeningList from '../components/ScreeningList'
import ScreeningDetail from '../components/ScreeningDetail'
import ScreeningAddModal from '../components/ScreeningAddModal'
import ScreeningFilters from '../components/ScreeningFilters'
import { useMemo } from 'react'

function ScreeningsPage() {
  const {
    activeScreenings, screenings, isLoading, error,
    addScreening, startScreening, finishScreening, deleteScreening,
  } = useScreeningContext()

  const [selectedId, setSelectedId] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [filters, setFilters] = useState({
    status: 'ALL',
    genre: '',
    hall: '',
  })
  const filtered = useMemo(() => {
    return activeScreenings.filter((s) => {
      const byStatus = filters.status === 'ALL' || s.status === filters.status
      const byGenre = !filters.genre || s.genre === filters.genre
      const byHall = !filters.hall  || s.hall  === filters.hall
      return byStatus && byGenre && byHall
    })
  }, [activeScreenings, filters])

  if (isLoading) return <Loader />
  if (error)     return <ErrorMessage message={error} />

  // Детальная страница сеанса
  if (selectedId !== null) {
    const screening = screenings.find((s) => s.id === selectedId)
    if (!screening) { setSelectedId(null); return null }
    return (
      <div className="page-grid">
        <ScreeningDetail
          screening={screening}
          onBack={() => setSelectedId(null)}
          onStart={(id) => { startScreening(id) }}
          onFinish={(id) => { finishScreening(id) }}
          onDelete={(id) => { deleteScreening(id); setSelectedId(null) }}
        />
      </div>
    )
  }

  return (
    <div className="page-grid">
      {/* Страница «подписывается» на данные из контекста — без глубокой передачи props. */}
      <SectionCard title="Сеансы">
        <button type="button" className="btn btn-outline" onClick={() => setShowForm(true)}>
          Добавить сеанс
        </button>

        {showForm && (
          <ScreeningAddModal
            onAdd={addScreening}
            onClose={() => setShowForm(false)}
          />
        )}

        <ScreeningFilters filters={filters} onChange={setFilters} />

        <ScreeningList
          screenings={filtered}
          onStart={startScreening}
          onFinish={finishScreening}
          onDelete={deleteScreening}
          onSelect={setSelectedId}
        />
      </SectionCard>
    </div>
  )
}

export default ScreeningsPage
