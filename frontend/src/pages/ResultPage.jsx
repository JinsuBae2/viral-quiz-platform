import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const ResultPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { result } = location.state || {};

    // If no result state, redirect home (or fetch if implemented)
    useEffect(() => {
        if (!result) {
            navigate('/');
        }
    }, [result, navigate]);

    if (!result) return null;

    return (
        <div className="p-6 text-center animate-fade-in-up max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">당신의 유형은?</h1>
            <div className="text-4xl mb-4">{result.title.split(' ')[0]}</div>
            <h2 className="text-3xl font-extrabold text-blue-600 mb-6">{result.title.substring(result.title.indexOf(' ')+1)}</h2>
            
            <div className="bg-gray-100 p-6 rounded-xl mb-8">
                <p className="text-gray-700 leading-relaxed">
                    {result.description}
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button 
                    onClick={() => navigate('/')} 
                    className="w-full sm:w-auto btn-primary flex-1"
                >
                    다른 테스트 하러가기
                </button>
                <button 
                    onClick={() => alert("링크가 복사되었습니다!")}
                    className="w-full sm:w-auto py-3 bg-gray-200 text-gray-700 rounded-lg font-bold hover:bg-gray-300 transition-colors flex-1"
                >
                    친구에게 공유하기
                </button>
            </div>
        </div>
    );
};

export default ResultPage;
