import React, { useEffect, useState } from 'react';
import api from '../services/api';
import QuizCard from '../components/QuizCard';

const HomePage = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/quizzes')
            .then(response => {
                setQuizzes(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Failed to fetch quizzes", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-center p-10">Loading...</div>;

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <section className="text-center py-16 px-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl text-white shadow-2xl relative overflow-hidden transform transition-transform hover:scale-[1.01]">
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        나를 알아보는 <br className="md:hidden" />
                        <span className="text-yellow-300">핵잼 심리테스트</span>
                    </h1>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto font-light">
                        친구들은 다 아는데 나만 모르는 나의 성향? <br/>
                        지금 바로 확인해보세요! 3분이면 충분합니다.
                    </p>
                    <button onClick={() => document.getElementById('quiz-list').scrollIntoView({ behavior: 'smooth' })} className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-blue-700 transition-all shadow-lg active:scale-95">
                        테스트 시작하기 👇
                    </button>
                </div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-pattern"></div>
            </section>

            {/* Quiz List Section */}
            <section id="quiz-list" className="scroll-mt-24">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <span className="text-2xl">✨</span> 인기 테스트
                    </h2>
                    <span className="text-gray-500 text-sm">총 {quizzes.length}개의 테스트가 기다리고 있어요!</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {quizzes.map(quiz => (
                        <QuizCard key={quiz.id} quiz={quiz} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
