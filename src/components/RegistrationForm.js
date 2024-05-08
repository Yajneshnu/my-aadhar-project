
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    address: '',
    contactInfo: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', formData);
      const { uid, aadharCard } = response.data;
      localStorage.setItem('aadharCard', JSON.stringify(aadharCard));
      navigate('/aadhar-card');
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <div className="input-group">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <input
          type="date"
          name="dateOfBirth"
          placeholder="Date of Birth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          name="contactInfo"
          placeholder="Contact Information"
          value={formData.contactInfo}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-btn">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;