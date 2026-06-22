import PropTypes from 'prop-types'
import { ScreeningStatus } from '../../constants/constants'

const STATUS_MAP = {
  [ScreeningStatus.UPCOMING]: { label: 'Предстоит', cls: 'badge-upcoming' },
  [ScreeningStatus.ONGOING]: { label: 'Идёт', cls: 'badge-ongoing'  },
  [ScreeningStatus.FINISHED]: { label: 'Завершён',  cls: 'badge-finished' },
}

function StatusBadge({ status }) {
  const { label, cls } = STATUS_MAP[status] ?? { label: status, cls: '' }
  return <span className={`badge ${cls}`}>{label}</span>
}

StatusBadge.propTypes = { status: PropTypes.string.isRequired }

export default StatusBadge
