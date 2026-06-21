import PropTypes from 'prop-types'

function ScreeningActions({ id, status, onStart, onFinish, onDelete, onSelect = null }) {
  return (
    <div className="screening-actions">
      {onSelect && (
        <button type="button" className="btn btn-outline" onClick={() => onSelect(id)}>
          Подробнее
        </button>
      )}

      {status === 'UPCOMING' && (
        <button type="button" className="btn btn-success" onClick={() => onStart(id)}>
          Начать
        </button>
      )}

      {status === 'ONGOING' && (
        <button type="button" className="btn btn-warning" onClick={() => onFinish(id)}>
          Завершить
        </button>
      )}
      
      <button type="button" className="btn btn-danger" onClick={() => onDelete(id)}>
        Удалить
      </button>
    </div>
  )
}

ScreeningActions.propTypes = {
  id:       PropTypes.number.isRequired,
  status:   PropTypes.string.isRequired,
  onStart:  PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSelect: PropTypes.func,
}

export default ScreeningActions