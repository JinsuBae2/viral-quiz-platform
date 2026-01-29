package com.example.quizplatform.model;

import java.util.List;

public class Quiz {
    private Long id;
    private String title;
    private String description;
    private String imageUrl;
    private List<Question> questionList;
    private List<QuizResult> resultList;

    public Quiz() {}

    public Quiz(Long id, String title, String description, String imageUrl, List<Question> questionList, List<QuizResult> resultList) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.questionList = questionList;
        this.resultList = resultList;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
    public List<Question> getQuestionList() { return questionList; }
    public void setQuestionList(List<Question> questionList) { this.questionList = questionList; }
    public List<QuizResult> getResultList() { return resultList; }
    public void setResultList(List<QuizResult> resultList) { this.resultList = resultList; }
}
