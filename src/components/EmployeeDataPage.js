import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const EmployeeDataPage = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    id: '',
    name: '',
    position: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const validateForm = () => {
    if (!newEmployee.id || !newEmployee.name || !newEmployee.position) {
      setError('All fields are required.');
      return false;
    }
    setError('');
    return true;
  };

  const handleAddEmployee = () => {
    if (!validateForm()) return;
    setEmployees([...employees, newEmployee]);
    setNewEmployee({ id: '', name: '', position: '' });
  };

  const handleUpdateEmployee = () => {
    if (!validateForm()) return;
    const updatedEmployees = employees.map((employee, i) =>
      i === newEmployee.index ? newEmployee : employee
    );
    setEmployees(updatedEmployees);
    setNewEmployee({ id: '', name: '', position: '' });
    setIsEditing(false);
  };

  const handleDeleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  const handleEditEmployee = (employee, index) => {
    setNewEmployee({ ...employee, index });
    setIsEditing(true);
  };

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Manage Employee Data</h1>
      
      <div className="flex flex-col w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        {error && (
          <p className="mb-4 text-red-500 font-semibold">
            {error}
          </p>
        )}
        <input
          type="text"
          name="id"
          placeholder="Employee ID"
          value={newEmployee.id}
          onChange={handleInputChange}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={newEmployee.name}
          onChange={handleInputChange}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="position"
          placeholder="Employee Position"
          value={newEmployee.position}
          onChange={handleInputChange}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <div className="flex space-x-2">
          {!isEditing ? (
            <button
              onClick={handleAddEmployee}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add Employee
            </button>
          ) : (
            <button
              onClick={handleUpdateEmployee}
              className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
            >
              Update Employee
            </button>
          )}
        </div>
      </div>

      <button
        onClick={() => navigate('/')}
        className="bg-red-500 text-white font-bold py-2 px-4 w-1/8 rounded hover:bg-red-300 mt-10"
      >
        Back
      </button>

      <div className="mt-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Employee List</h2>
        <ul className="bg-white rounded-lg shadow-lg p-4">
          {employees.map((employee, index) => (
            <li key={index} className="mb-2 p-2 border-b flex justify-between items-center">
              <span>
                {employee.id} - {employee.name} ({employee.position})
              </span>
              <div className="space-x-2">
                <button
                  onClick={() => handleEditEmployee(employee, index)}
                  className="text-blue-500 hover:underline"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDeleteEmployee(index)}
                  className="text-red-500 hover:underline"
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmployeeDataPage;
