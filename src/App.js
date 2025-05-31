import React, { useState, useEffect } from 'react';
import EmployeeForm from './components/EmployeeForm';

function App() {
  const [employees, setEmployees] = useState([]);

  // Load data from local storage on page load
  useEffect(() => {
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  // Save data to local storage every time employees array changes
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <div className="App">
      <h1>Employee Management</h1>
      <EmployeeForm onAddEmployee={addEmployee} />
    </div>
  );
}

export default App;

