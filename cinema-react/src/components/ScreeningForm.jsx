import { useState } from 'react'
import PropTypes from 'prop-types'
import { EMPTY, GENRES, HALLS } from '../constants/constants'

function ScreeningForm({ onSubmit }) {
  const [form, setForm] = useState(EMPTY)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit() {
    if (!form.title || !form.genre || !form.hall || !form.dateTime || !form.price) return
    onSubmit(form)
    setForm(EMPTY)
  }

  return (
    <div className="screening-form">
      <div className="form-group">
        <label className="form-label">Название фильма</label>
        <input type="text" name="title" value={form.title} onChange={handleChange}
          className="form-input" placeholder="Например: Интерстеллар" maxLength={100} />
      </div>

      <div className="form-group">
        <label className="form-label">Жанр</label>
        <select name="genre" value={form.genre} onChange={handleChange} className="form-input">
          <option value="">— выберите —</option>
          {GENRES.map((g) => <option key={g} value={g}>{g}</option>)}
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Зал</label>
        <select name="hall" value={form.hall} onChange={handleChange} className="form-input">
          <option value="">— выберите —</option>
          {HALLS.map((h) => <option key={h} value={h}>{h}</option>)}
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Дата и время</label>
        <input type="datetime-local" name="dateTime" value={form.dateTime}
          onChange={handleChange} className="form-input" />
      </div>

      <div className="form-group">
        <label className="form-label">Цена билета (₽)</label>
        <input type="number" name="price" value={form.price} onChange={handleChange}
          className="form-input" min="1" placeholder="450" />
      </div>

      <div className="form-group">
        <label className="form-label">Описание</label>
        <textarea name="description" value={form.description} onChange={handleChange}
          className="form-input form-textarea" maxLength={200} placeholder="Краткое описание" />
      </div>

      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        Создать
      </button>
    </div>
  )
}

ScreeningForm.propTypes = { onSubmit: PropTypes.func.isRequired }

export default ScreeningForm
