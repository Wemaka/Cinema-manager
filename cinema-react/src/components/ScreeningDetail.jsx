import PropTypes from 'prop-types'
import StatusBadge from './ui/StatusBadge'
import ScreeningActions from './ScreeningActions'
import { formatDateTime } from '../utils/formatDate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function ScreeningDetail({ screening, onBack, onStart, onFinish, onDelete }) {
  const { id, title, genre, age, hall, dateTime, price, status, description } = screening

  function handleDelete() {
    onDelete(id)
    onBack()
  }

  return (
    <>
      <button type="button" className="detail-back" onClick={onBack}>
        <FontAwesomeIcon icon={faArrowLeft} /> Назад к списку
      </button>

      <section className="card">
        <div className="detail-header">
          <div>
            <h2 className="detail-title">{title}</h2>
          </div>
          <ScreeningActions
            id={id}
            status={status}
            onStart={onStart}
            onFinish={onFinish}
            onDelete={handleDelete}
          />
        </div>

        <div className="detail-grid">
          <div className="detail-section">
            <h3 className="detail-section-title">Описание</h3>
            <p className="detail-description">
              {description || 'Описание не указано.'}
            </p>
          </div>

          <div className="detail-section">
            <h3 className="detail-section-title">Информация о сеансе</h3>
            <table className="detail-table">
              <tbody>
                <tr>
                  <td className="detail-label">Фильм</td>
                  <td className="detail-value">{title}</td>
                </tr>
                <tr>
                  <td className="detail-label">Жанр</td>
                  <td className="detail-value">{genre}</td>
                </tr>
                <tr>
                  <td className="detail-label">Возрастное ограничение</td>
                  <td className="detail-value">{age}</td>
                </tr>
                <tr>
                  <td className="detail-label">Зал</td>
                  <td className="detail-value">{hall}</td>
                </tr>
                <tr>
                  <td className="detail-label">Дата и время</td>
                  <td className="detail-value">{formatDateTime(dateTime)}</td>
                </tr>
                <tr>
                  <td className="detail-label">Цена билета</td>
                  <td className="detail-value"><strong>{price} ₽</strong></td>
                </tr>
                <tr>
                  <td className="detail-label">Статус</td>
                  <td className="detail-value"><StatusBadge status={status} /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}

ScreeningDetail.propTypes = {
  screening: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired,
  onStart: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default ScreeningDetail
