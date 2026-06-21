import PropTypes from 'prop-types'
import ScreeningForm from './ScreeningForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function ScreeningAddModal({ onAdd, onClose }) {
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Создать сеанс</h2>
          <button type="button" className="modal-close" onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <ScreeningForm
          onSubmit={(data) => {
            onAdd(data)
            onClose()
          }}
        />
      </div>
    </div>
  )
}

ScreeningAddModal.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ScreeningAddModal