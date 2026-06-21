import { initialScreenings } from '../data/screenings'

// Имитация API: отделяем источник данных от компонентов,
// чтобы проще заменить mock на реальный backend (GET /api/screenings).
// export async function fetchScreenings() {
//   await new Promise((resolve) => setTimeout(resolve, 350))
//   return structuredClone(initialScreenings)
// }

// Api на java
export async function fetchScreenings() {
  const response = await fetch('http://localhost:8080/api/screenings')
  if (!response.ok) throw new Error(`Ошибка: ${response.status}`)
  return response.json()
}
