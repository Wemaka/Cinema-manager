import { useState } from 'react'
import PropTypes from 'prop-types'

function FinishedList({ screenings, onSelect, onClearArchive }) {
  const finished = screenings.filter((s) => s.status === 'FINISHED')
  const [confirm, setConfirm] = useState(false)

  function handleClearClick() {
    setConfirm(true)
  }

  function handleConfirm() {
    onClearArchive()
    setConfirm(false)
  }

  function handleCancel() {
    setConfirm(false)
  }

  return (
    <>
      <ul className="finished-list">
        {finished.length === 0 && (
          <li className="empty-message">Завершённых сеансов нет.</li>
        )}
        
        {finished.map((s) => (
          <li key={s.id} className="finished-item">
            <button
              type="button"
              className="finished-link"
              onClick={() => onSelect(s.id)}
            >
              {s.title}
            </button>
            {' — '}
            {new Date(s.dateTime).toLocaleDateString('ru-RU')}
          </li>
        ))}
      </ul>

      {finished.length > 0 && !confirm && (
        <button type="button" className="btn btn-delete btn-clear-archive" onClick={handleClearClick}>
          Удалить всё
        </button>
      )}

      {confirm && (
        <div className="confirm-box">
          <p className="confirm-text">Удалить все {finished.length} записи из архива?</p>
          <div className="confirm-actions">
            <button type="button" className="btn btn-delete" onClick={handleConfirm}>
              Да, удалить
            </button>
            <button type="button" className="btn btn-cancel-confirm" onClick={handleCancel}>
              Отмена
            </button>
          </div>
        </div>
      )}
    </>
  )
}

FinishedList.propTypes = {
  screenings: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  onClearArchive: PropTypes.func.isRequired,
}

export default FinishedList
