import React from 'react';
import { Link } from 'react-router-dom';

const QuizCard = ({ quiz }) => {
    return (
        <Link to={`/quiz/${quiz.id}`} className="block transform transition-all hover:-translate-y-1 active:scale-95 h-full">
            <div className="card h-full flex flex-col hover:shadow-2xl border-0 overflow-hidden group">
                {quiz.imageUrl && (
                    <div className="h-48 overflow-hidden">
                        <img 
                            src={quiz.imageUrl} 
                            alt={quiz.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                )}
                <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800 leading-tight">{quiz.title}</h3>
                        <p className="text-gray-500 text-sm line-clamp-3 mb-4">{quiz.description}</p>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                        <span className="text-xs font-bold bg-blue-50 text-blue-600 px-3 py-1 rounded-full uppercase tracking-wider">Popular</span>
                        <span className="text-blue-500 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                            시작하기 <span>&rarr;</span>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default QuizCard;
