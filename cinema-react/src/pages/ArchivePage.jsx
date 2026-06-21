import { useState } from 'react'
import { useScreeningContext } from '../hooks/useScreeningContext'
import SectionCard from '../components/ui/SectionCard'
import { Loader, ErrorMessage } from '../components/ui/Feedback'
import ArchiveList from '../components/ArchiveList'
import ScreeningDetail from '../components/ScreeningDetail'

function ArchivePage() {
  const {
    finishedScreenings, screenings, isLoading, error,
    startScreening, finishScreening, deleteScreening, clearArchive,
  } = useScreeningContext()

  const [selectedId, setSelectedId] = useState(null)

  if (isLoading) return <Loader />
  if (error) return <ErrorMessage message={error} />

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
      {/* Производное значение finishedScreenings считается в хуке — не дублируется здесь. */}
      <SectionCard title={`Архив (${finishedScreenings.length})`}>
        <ArchiveList
          screenings={finishedScreenings}
          onSelect={setSelectedId}
          onClear={clearArchive}
        />
      </SectionCard>
    </div>
  )
}

export default ArchivePage
