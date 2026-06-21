package org.example.data;

import org.example.model.Screening;
import org.example.model.ScreeningStatus;

import java.util.Arrays;
import java.util.List;

// Начальные данные в памяти — совпадают с src/data/screenings.js на фронтенде.
// В реальном проекте здесь была бы база данных.
public class InMemoryData {

    public static List<Screening> getScreenings() {
        return Arrays.asList(
            new Screening(
                1L,
                "Дюна: Часть вторая",
                "Фантастика",
                "12+",
                "Зал 1 (IMAX)",
                "2026-06-25T14:00:00",
                650,
                ScreeningStatus.UPCOMING,
                "Продолжение эпической саги о Поле Атрейдесе."
            ),
            new Screening(
                2L,
                "Оппенгеймер",
                "Драма",
                "12+",
                "Зал 2",
                "2026-06-20T18:30:00",
                450,
                ScreeningStatus.ONGOING,
                "История создателя атомной бомбы."
            ),
            new Screening(
                3L,
                "Мальчик и птица",
                "Анимация",
                "6+",
                "Зал 3",
                "2026-06-18T11:00:00",
                400,
                ScreeningStatus.FINISHED,
                "Новый шедевр студии Ghibli от Хаяо Миядзаки."
            ),
            new Screening(
                4L,
                "Мегалополис",
                "Драма",
                "12+",
                "Зал 1 (IMAX)",
                "2026-06-27T21:00:00",
                700,
                ScreeningStatus.UPCOMING,
                "Фантастическая эпопея Фрэнсиса Форда Копполы."
            )
        );
    }
}
