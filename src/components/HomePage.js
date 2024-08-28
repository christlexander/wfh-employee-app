import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to the WFH Employee App</h1>
      <button
        onClick={() => navigate('/login')}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Go to Attendance Login
      </button>
    </div>
  );
};

export default HomePage;
