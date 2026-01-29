package com.example.quizplatform.model;

public class QuizResult {
    private Long id;
    private int minScore;
    private int maxScore;
    private String title;
    private String description;
    private String imageUrl;

    public QuizResult() {}

    public QuizResult(Long id, int minScore, int maxScore, String title, String description, String imageUrl) {
        this.id = id;
        this.minScore = minScore;
        this.maxScore = maxScore;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public int getMinScore() { return minScore; }
    public void setMinScore(int minScore) { this.minScore = minScore; }
    public int getMaxScore() { return maxScore; }
    public void setMaxScore(int maxScore) { this.maxScore = maxScore; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
}
