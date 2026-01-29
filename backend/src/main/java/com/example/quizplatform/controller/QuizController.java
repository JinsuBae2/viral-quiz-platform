package com.example.quizplatform.controller;

import com.example.quizplatform.model.Quiz;
import com.example.quizplatform.model.QuizResult;
import com.example.quizplatform.service.QuizService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/quizzes")
public class QuizController {

    private final QuizService quizService;

    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    @GetMapping
    public List<Quiz> getAllQuizzes() {
        return quizService.getAllQuizzes();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Quiz> getQuizById(@PathVariable Long id) {
        return quizService.getQuizById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/{id}/submit")
    public ResponseEntity<QuizResult> submitQuiz(@PathVariable Long id, @RequestBody Map<String, Integer> payload) {
        // payload: { "totalScore": 15 }
        int totalScore = payload.getOrDefault("totalScore", 0);
        return quizService.calculateResult(id, totalScore)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.badRequest().build());
    }
}
