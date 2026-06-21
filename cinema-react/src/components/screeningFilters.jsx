import PropTypes from 'prop-types'
import { EMPTY, GENRES, HALLS } from '../constants/constants'

function ScreeningFilters({ filters, onChange }) {
  return (
    <div className="filters">
      <select
        value={filters.status}
        onChange={(e) => onChange({ ...filters, status: e.target.value })}
        className="form-input"
      >
        <option value="ALL">Все статусы</option>
        <option value="UPCOMING">Предстоит</option>
        <option value="ONGOING">Идёт</option>
      </select>

      <select
        value={filters.genre}
        onChange={(e) => onChange({ ...filters, genre: e.target.value })}
        className="form-input"
      >
        <option value="">Все жанры</option>
        {GENRES.map((g) => <option key={g} value={g}>{g}</option>)}
      </select>

      <select
        value={filters.hall}
        onChange={(e) => onChange({ ...filters, hall: e.target.value })}
        className="form-input"
      >
        <option value="">Все залы</option>
        {HALLS.map((h) => <option key={h} value={h}>{h}</option>)}
      </select>
    </div>
  )
}

ScreeningFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default ScreeningFilters