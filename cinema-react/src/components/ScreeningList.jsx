import { memo } from 'react'
import PropTypes from 'prop-types'
import StatusBadge from './ui/StatusBadge'
import ScreeningActions from './ScreeningActions'
import { formatDateTime } from '../utils/formatDate'

const ScreeningItem = memo(function ScreeningItem({
  screening, onStart, onFinish, onDelete, onSelect,
}) {
  const { id, title, genre, age, hall, dateTime, price, status } = screening

  return (
    <li className="screening-item">
      <button type="button" className="screening-item-title" onClick={() => onSelect(id)}>
        {title}
      </button>

      <div className="screening-item-meta">
        <span>{genre}</span>
        <span>{age}</span>
        <span>{hall}</span>
        <span>{formatDateTime(dateTime)}</span>
        <span>{price} ₽</span>
      </div>

      <div className="screening-item-footer">
        <StatusBadge status={status} />
        <ScreeningActions
          id={id}
          status={status}
          onStart={onStart}
          onFinish={onFinish}
          onDelete={onDelete}
          onSelect={onSelect}
        />
      </div>
    </li>
  )
})

ScreeningItem.propTypes = {
  screening: PropTypes.object.isRequired,
  onStart: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
}

function ScreeningList({ screenings, onStart, onFinish, onDelete, onSelect }) {
  if (!screenings.length) return <p className="empty-message">Активных сеансов нет.</p>

  return (
    <ul className="screening-list">
      {screenings.map((s) => (
        <ScreeningItem
          key={s.id}
          screening={s}
          onStart={onStart}
          onFinish={onFinish}
          onDelete={onDelete}
          onSelect={onSelect}
        />
      ))}
    </ul>
  )
}

ScreeningList.propTypes = {
  screenings: PropTypes.array.isRequired,
  onStart: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default ScreeningList
