import React, { useState } from 'react';
import Pic1 from '../assets/images/Argon.png';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    
    // Check if both fields are filled
    if (!employeeId || !employeeName) {
      alert('Please fill in both Employee ID and Name.');
      return;
    }
    
    // Navigate to the attendance page with the employee data
    navigate('/attendance', { state: { employeeId, employeeName } });
  };

  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-xl border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div
          className="hidden md:block lg:w-1/2 bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${Pic1})`,
            backgroundSize: 'contain',
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-gray-600 text-center">Welcome</p>
          <form onSubmit={handleLogin}>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Employee ID
              </label>
              <input
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="text"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Employee Name
              </label>
              <input
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="text"
                required
              />
            </div>
            <div className="mt-8 flex justify-evenly">
              <button
                onClick={() => navigate('/')}
                className="bg-red-500 text-white font-bold py-2 px-4 w-1/3 rounded hover:bg-red-300"
              >
                Back
              </button>
              <button
                type="submit"  // Make sure to submit the form
                className="bg-blue-700 text-white font-bold py-2 px-4 w-1/3 rounded hover:bg-blue-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
