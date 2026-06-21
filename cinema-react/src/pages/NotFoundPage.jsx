import SectionCard from '../components/ui/SectionCard'

function NotFoundPage() {
  return (
    <div className="page-grid">
      <SectionCard title="Страница не найдена">
        <p>Страница не существует. Вернитесь на главную.</p>
      </SectionCard>
    </div>
  )
}

export default NotFoundPage
