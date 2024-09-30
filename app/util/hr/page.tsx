"use client"
import React, { useState } from 'react';
import axios from 'axios'; // Assuming you'll send data to an API
import { nu_api_base_url } from '@/app/Contants';

// Volunteer Interface
interface Volunteer {
  names: string;
  email: string;
  department: string;
  phone: string;
  designition: string;
  avatar: string;
}

const VolunteerRegistrationForm: React.FC = () => {
  // State for form data
  const [volunteer, setVolunteer] = useState<Volunteer>({
    names: '',
    email: '',
    department: '',
    phone: '',
    designition: '',
    avatar: ''
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setVolunteer({
      ...volunteer,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${nu_api_base_url}/sebabatso/volunteers`, volunteer);
      console.log('Volunteer registered successfully:', response.data);
      // Reset form or display success message
    } catch (error) {
      console.error('There was an error registering the volunteer:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="names">Names</label>
        <input
          type="text"
          id="names"
          name="names"
          value={volunteer.names}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={volunteer.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="department">Department</label>
        <input
          type="text"
          id="department"
          name="department"
          value={volunteer.department}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={volunteer.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="designition">Designation</label>
        <input
          type="text"
          id="designition"
          name="designition"
          value={volunteer.designition}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="avatar">Avatar URL</label>
        <input
          type="url"
          id="avatar"
          name="avatar"
          value={volunteer.avatar}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Register Volunteer</button>
    </form>
  );
};

export default VolunteerRegistrationForm;
