import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
