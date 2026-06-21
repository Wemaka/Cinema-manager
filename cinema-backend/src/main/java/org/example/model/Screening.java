package org.example.model;

// Модель сеанса — поля совпадают с тем, что ожидает фронтенд
public class Screening {

    private Long id;
    private String title;
    private String genre;
    private String age;
    private String hall;
    private String dateTime;
    private Integer price;
    private ScreeningStatus status;
    private String description;

    // Конструктор для удобного создания объектов в InMemoryData
    public Screening(Long id, String title, String genre, String age, String hall,
                     String dateTime, Integer price, ScreeningStatus status, String description) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.age = age;
        this.hall = hall;
        this.dateTime = dateTime;
        this.price = price;
        this.status = status;
        this.description = description;
    }

    // Getters — Spring использует их для сериализации в JSON
    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getGenre() { return genre; }
    public String getAge() { return age; }
    public String getHall() { return hall; }
    public String getDateTime() { return dateTime; }
    public Integer getPrice() { return price; }
    public ScreeningStatus getStatus() { return status; }
    public String getDescription() { return description; }
}
