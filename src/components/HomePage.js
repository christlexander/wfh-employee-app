import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen flex justify-center items-center">
      <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
          <span className="block">
            Have you fill your Attendance?
          </span>
          
        </h2>
        <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
        It is company regulation that every employee is required to fill the Attendance.
        </p>
        <h2 className="text-xl">
            <span className="block text-red-600">
            Attendance is mandatory
          </span>
          </h2>
        
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <button 
            onClick={() => navigate('/login')}
              type="button" 
              className="py-4 px-6 bg-lime-400 hover:bg-lime-700  text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              Fill Attendance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
