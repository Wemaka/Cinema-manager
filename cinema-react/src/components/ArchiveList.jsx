import { useState } from 'react'
import PropTypes from 'prop-types'
import { formatDate } from '../utils/formatDate'

function ArchiveList({ screenings, onSelect, onClear }) {
  const [confirm, setConfirm] = useState(false)

  if (!screenings.length) return <p className="empty-message">Завершённых сеансов нет.</p>

  return (
    <>
      <ul className="archive-list">
        {screenings.map((s) => (
          <li key={s.id} className="archive-item">
            <button type="button" className="archive-link" onClick={() => onSelect(s.id)}>
              {s.title}
            </button>
            {' - '}
            {formatDate(s.dateTime)}
          </li>
        ))}
      </ul>

      {!confirm ? (
        <button type="button" className="btn btn-danger" style={{ marginTop: '0.75rem', width: '100%' }}
          onClick={() => setConfirm(true)}>
          Удалить всё
        </button>
      ) : (
        <div className="confirm-box">
          <p className="confirm-text">Удалить все {screenings.length} записи из архива?</p>
          <div className="confirm-actions">
            <button type="button" className="btn btn-danger" onClick={() => { onClear(); setConfirm(false) }}>
              Да, удалить
            </button>
            <button type="button" className="btn btn-outline" onClick={() => setConfirm(false)}>
              Отмена
            </button>
          </div>
        </div>
      )}
    </>
  )
}

ArchiveList.propTypes = {
  screenings: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
}

export default ArchiveList
