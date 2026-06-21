package org.example.controller;

import org.example.data.InMemoryData;
import org.example.model.Screening;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

// @RestController — говорит Spring, что это REST-контроллер.
// Методы автоматически сериализуют объекты в JSON.
@RestController
@RequestMapping("/api/screenings")
// @CrossOrigin разрешает фронтенду (порт 5173) обращаться к бэкенду (порт 8080).
// Без этого браузер заблокирует запрос из-за политики CORS.
@CrossOrigin(origins = "http://localhost:5173")
public class ScreeningController {

    // GET /api/screenings — возвращает список всех сеансов в формате JSON
    @GetMapping
    public List<Screening> getAllScreenings() {
        return InMemoryData.getScreenings();
    }
}
