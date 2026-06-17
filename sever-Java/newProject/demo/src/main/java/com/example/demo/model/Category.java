package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    private String name;
    private String description;
    private String color;
    @JsonIgnore
@OneToMany(mappedBy= "category")
private List<Book> Book;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public List<Book> getBook() {
        return Book;
    }

    public void setBook(List<Book> book) {
        Book = book;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
    @JsonCreator
    public Category() {
    }

    public Category(long id, String name, String description, String color, List<Book> book) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.color = color;
        Book = book;
    }
}
