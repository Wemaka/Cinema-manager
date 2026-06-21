export function Loader() {
  return <p className="loader">Загрузка данных...</p>
}

export function ErrorMessage({ message }) {
  return <p className="error-message">{message}</p>
}
