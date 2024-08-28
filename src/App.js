import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import AttendancePage from './components/AttendancePage';
import EmployeeDataPage from './components/EmployeeDataPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/attendance" element={<AttendancePage />} />
        <Route path="/admin/employees" element={<EmployeeDataPage />} />
      </Routes>
    </div>
  );
};

export default App;
