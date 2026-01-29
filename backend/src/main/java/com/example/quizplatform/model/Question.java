package com.example.quizplatform.model;

import java.util.List;

public class Question {
    private Long id;
    private String text;
    private List<Option> options;

    public Question() {}

    public Question(Long id, String text, List<Option> options) {
        this.id = id;
        this.text = text;
        this.options = options;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getText() { return text; }
    public void setText(String text) { this.text = text; }
    public List<Option> getOptions() { return options; }
    public void setOptions(List<Option> options) { this.options = options; }
}
