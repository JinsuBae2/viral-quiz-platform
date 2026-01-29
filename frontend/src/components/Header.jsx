import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <span className="text-2xl transform group-hover:scale-110 transition-transform">🔥</span>
                    <span className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        ViralQuiz
                    </span>
                </Link>
                <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-500">
                    <Link to="/" className="hover:text-blue-600 transition-colors">홈</Link>
                    <Link to="/" className="hover:text-blue-600 transition-colors">인기 테스트</Link>
                    <Link to="/" className="hover:text-blue-600 transition-colors">신규 테스트</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
