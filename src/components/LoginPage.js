import React from 'react';
import Pic1 from '../assets/images/Argon.png';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const navigate = useNavigate();
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
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Employee ID
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="email"
              required
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
            </div>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
            />
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
            >
              Forget Password?
            </a>
          </div>
          <div className="mt-8 flex justify-evenly">
          <button 
    onClick={() => navigate('/home')}
    className="bg-red-500 text-white font-bold py-2 px-4 w-1/3 rounded hover:bg-red-300">
    Back
  </button>
  <button 
    className="bg-blue-700 text-white font-bold py-2 px-4 w-1/3 rounded hover:bg-blue-600">
    Login
  </button>
</div>

          <a
            href="#"
            className=" flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
          >  
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
