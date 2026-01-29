package com.example.quizplatform.service;

import com.example.quizplatform.model.Quiz;
import com.example.quizplatform.model.QuizResult;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class QuizService {

    private final List<Quiz> quizzes = new ArrayList<>();
    private final ObjectMapper objectMapper = new ObjectMapper();

    @PostConstruct
    public void initData() {
        try {
            InputStream inputStream = getClass().getResourceAsStream("/quizzes.json");
            if (inputStream == null) {
                System.err.println("CRITICAL: Could not find quizzes.json in classpath!");
                return;
            }
            Quiz[] loadedQuizzes = objectMapper.readValue(inputStream, Quiz[].class);
            if (loadedQuizzes != null) {
                for (Quiz quiz : loadedQuizzes) {
                    quizzes.add(quiz);
                }
                System.out.println("Successfully loaded " + quizzes.size() + " quizzes from JSON.");
            }
        } catch (IOException e) {
            System.err.println("Failed to load quizzes from JSON: " + e.getMessage());
            e.printStackTrace();
        }
    }

    public List<Quiz> getAllQuizzes() {
        return quizzes;
    }

    public Optional<Quiz> getQuizById(Long id) {
        return quizzes.stream().filter(q -> q.getId().equals(id)).findFirst();
    }

    public Optional<QuizResult> calculateResult(Long quizId, int totalScore) {
        return getQuizById(quizId).flatMap(quiz -> 
            quiz.getResultList().stream()
                .filter(r -> totalScore >= r.getMinScore() && totalScore <= r.getMaxScore())
                .findFirst()
        );
    }
}
