// Начальные данные сеансов. Вынесены в отдельный модуль для чистой архитектуры.
// ScreeningStatus: UPCOMING | ONGOING | FINISHED
export const initialScreenings = [
  {
    id: 1,
    title: 'Дюна: Часть вторая',
    genre: 'Фантастика',
    hall: 'Зал 1 (IMAX)',
    dateTime: '2026-06-25T14:00:00',
    price: 650,
    status: 'UPCOMING',
    description: 'Продолжение эпической саги о Поле Атрейдесе.',
  },
  {
    id: 2,
    title: 'Оппенгеймер',
    genre: 'Драма',
    hall: 'Зал 2',
    dateTime: '2026-06-20T18:30:00',
    price: 450,
    status: 'ONGOING',
    description: 'История создателя атомной бомбы.',
  },
  {
    id: 3,
    title: 'Мальчик и птица',
    genre: 'Анимация',
    hall: 'Зал 3',
    dateTime: '2026-06-18T11:00:00',
    price: 400,
    status: 'FINISHED',
    description: 'Новый шедевр студии Ghibli от Хаяо Миядзаки.',
  },
  {
    id: 4,
    title: 'Мегалополис',
    genre: 'Драма',
    hall: 'Зал 1 (IMAX)',
    dateTime: '2026-06-27T21:00:00',
    price: 700,
    status: 'UPCOMING',
    description: 'Фантастическая эпопея Фрэнсиса Форда Копполы.',
  },
]
