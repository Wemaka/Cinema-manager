import SectionCard from '../components/ui/SectionCard'

function AboutPage() {
  return (
    <div className="page-grid">
      <SectionCard title="О проекте">
        <p>
          Одностраничное веб-приложение «Кинотеатр» - курсовая работа
          по разработке веб-приложений 2025–2026.
        </p>
        <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem', display: 'grid', gap: '0.4rem' }}>
          <li>Предметная область: управление киносеансами</li>
          <li>Данные приходят из java backend</li>
          <li>Состояние живёт в контексте, UI собран из мелких компонентов</li>
          <li>Стек: React 18, Vite, React Router DOM</li>
        </ul>
      </SectionCard>

      <SectionCard title="Статусы сеансов">
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'grid', gap: '0.4rem' }}>
          <li><strong>UPCOMING</strong> - сеанс запланирован, ещё не начался</li>
          <li><strong>ONGOING</strong> - сеанс идёт прямо сейчас</li>
          <li><strong>FINISHED</strong> - сеанс завершён, перемещён в архив</li>
        </ul>
      </SectionCard>
    </div>
  )
}

export default AboutPage
