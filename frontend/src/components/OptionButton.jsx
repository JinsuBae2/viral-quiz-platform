import React from 'react';

const OptionButton = ({ text, onClick }) => {
    return (
        <button 
            onClick={onClick}
            className="w-full text-left p-4 mb-3 border-2 border-gray-100 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all font-medium text-gray-700 active:bg-blue-100 active:scale-98"
        >
            {text}
        </button>
    );
};

export default OptionButton;
