import React, { useState } from 'react';
import axios from 'axios';

import '../styles/log.css';

export default function CreateUser() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      password: '',
    });

    try {
      await axios.post('http://localhost:8080/profile-page/create-user', {
        formData,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='container-sm col-md-8'>
      <h2>Personal Details</h2>
      <form
        action='/profile-page/create-user'
        method='post'
        onSubmit={handleSubmit}>
        <div className='mb-3'>
          <input
            type='text'
            name='name'
            className='form-control'
            id='name'
            placeholder='Enter your name'
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <br />
          <input
            type='email'
            name='email'
            id='email'
            className='form-control'
            placeholder='Enter your email'
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <br />
          <input
            type='text'
            name='password'
            id='password'
            className='form-control'
            placeholder='Enter a password'
            value={formData.password}
            onChange={e =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          <br />
          <button type='submit' className='btn btn-primary user-details-btn'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
