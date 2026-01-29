package com.example.quizplatform.model;

public class Option {
    private Long id;
    private String text;
    private int score;

    public Option() {}

    public Option(Long id, String text, int score) {
        this.id = id;
        this.text = text;
        this.score = score;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getText() { return text; }
    public void setText(String text) { this.text = text; }
    public int getScore() { return score; }
    public void setScore(int score) { this.score = score; }
}
