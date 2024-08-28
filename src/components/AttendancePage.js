import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AttendancePage = () => {
  const location = useLocation();
  const { employeeId, employeeName } = location.state || {};

  const [photo, setPhoto] = useState(null);
  const [attendanceList, setAttendanceList] = useState([]);
  const [warning, setWarning] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file)); // For preview
      setWarning(''); // Clear any existing warning
    }
  };

  const handleSubmitAttendance = () => {
    if (!photo) {
      setWarning('Please upload a photo before submitting.');
      return;
    }
    
    const timestamp = new Date().toLocaleString();
    setAttendanceList([
      ...attendanceList,
      { id: employeeId, name: employeeName, timestamp, photo }
    ]);

    // Optionally reset photo after submission
    setPhoto(null);
   
  };

const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Attendance Page</h1>
      <p className="text-xl mb-4">Employee ID: {employeeId}</p>
      <p className="text-xl mb-4">Employee Name: {employeeName}</p>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Upload Photo
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 border border-gray-300 rounded"
          required
        />
        {photo && (
          <img
            src={photo}
            alt="Preview"
            className="mt-4 w-32 h-32 object-cover rounded"
          />
        )}
        {warning && (
          <p className="text-red-500 text-sm mt-2">{warning}</p>
        )}
      </div>

      <button
        onClick={handleSubmitAttendance}
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        Submit Attendance
      </button>
      <button
        onClick={() => navigate('/')}
        className="bg-red-500 text-white font-bold py-2 px-4 w-1/8 rounded hover:bg-red-300 mt-10"
      >
        Back
      </button>
      <div className="mt-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Attendance List</h2>
        <ul className="bg-white rounded-lg shadow-lg p-4">
          {attendanceList.map((entry, index) => (
            <li key={index} className="mb-2 p-2 border-b flex items-center">
              <div className="w-32 h-32 mr-4">
                <img
                  src={entry.photo}
                  alt="Employee"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div>
                {entry.id} - {entry.name} - {entry.timestamp}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AttendancePage;
