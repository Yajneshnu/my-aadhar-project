
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import AadharCardPage from './pages/AadharCardPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/aadhar-card" element={<AadharCardPage />} />
        <Route path="/" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
}

export default App;