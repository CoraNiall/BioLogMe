import React, { useState } from 'react';
import axios from 'axios';

import '../styles/log.css';

export default function UserDetails() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    axios.post('/user-details', {
      name: name,
      email: email,
      password: password,
    });
  };

  return (
    <div className='container-sm col-md-8'>
      <h2>Personal Details</h2>
      <form action='#'>
        <div className='mb-3'>
          <label htmlFor='name'>Enter your name:</label>
          <input
            type='text'
            name='name'
            className='form-control'
            id='name'
            value={name}
            onChange={handleNameChange}
            required
          />
          <br />
          <label htmlFor='email'>Enter your email:</label>
          <input
            type='email'
            name='email'
            id='email'
            className='form-control'
            value={email}
            onChange={handleEmailChange}
            required
          />
          <br />
          <label htmlFor='password'>Enter a password:</label>
          <input
            type='text'
            name='password'
            id='password'
            className='form-control'
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <br />
          <button
            type='submit'
            className='btn btn-primary user-details-btn'
            onSubmit={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
