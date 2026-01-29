import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import OptionButton from '../components/OptionButton';
import ProgressBar from '../components/ProgressBar';

const QuizPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [quiz, setQuiz] = useState(null);
    const [currentStep, setCurrentStep] = useState(0);
    const [totalScore, setTotalScore] = useState(0);

    useEffect(() => {
        api.get(`/quizzes/${id}`)
            .then(res => setQuiz(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const handleAnswer = (score) => {
        const newScore = totalScore + score;
        setTotalScore(newScore);

        if (currentStep < quiz.questionList.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            // Submit result
            api.post(`/quizzes/${id}/submit`, { totalScore: newScore })
                .then(res => {
                    // Navigate to result page with result data
                    navigate(`/result/${id}`, { state: { result: res.data } });
                })
                .catch(err => console.error(err));
        }
    };

    if (!quiz) return <div className="p-6 text-center">Loading Quiz...</div>;

    const question = quiz.questionList[currentStep];

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <ProgressBar current={currentStep + 1} total={quiz.questionList.length} />
            <h2 className="text-xl font-bold mb-6 text-gray-800">
                Q{currentStep + 1}. {question.text}
            </h2>
            <div className="space-y-4">
                {question.options.map(option => (
                    <OptionButton 
                        key={option.id} 
                        text={option.text} 
                        onClick={() => handleAnswer(option.score)} 
                    />
                ))}
            </div>
        </div>
    );
};

export default QuizPage;
