package com.example.todo;

import jakarta.persistence.*;

@Entity
public class Todo {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String description;
    private boolean completed;

    // Getters and setters
    // ...
}