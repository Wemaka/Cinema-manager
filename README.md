# Cinema Booking

Курсовая работа по разработке веб-приложений.

## Структура проекта
cinema-booking/

├── cinema-backend/   # Spring Boot REST API (Java 17)

└── cinema-react/     # React + Vite (Node.js 18+)

## Запуск

### 1. Бэкенд (порт 8080)

```bash
.\cinema-backend\mvnw.cmd -f .\cinema-backend spring-boot:run
```

Проверить: http://localhost:8080/api/screenings

http://localhost:8080/swagger-ui/index.html#/

### 2. Фронтенд (порт 5173)

```bash
cd cinema-react
npm install
npm run dev
```

Открыть: http://localhost:5173
