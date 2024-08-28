import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Login to Mark Attendance</h1>
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="Username"
          className="mb-4 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-2 border rounded"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
