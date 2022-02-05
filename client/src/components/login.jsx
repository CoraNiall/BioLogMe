import React, { useState } from 'react';
import axios from 'axios';

import '../styles/log.css';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async e => {
    e.preventDefault();

    await axios
      .post('http://localhost:8080/login', {
        user,
      })
      .then(res => {
        console.log(res.data.user || 'User not found');
      })
      .catch(e => {
        console.log('User not found', e);
      });
  };

  return (
    <div className='container-sm col-md-8'>
      <h2>Please log in to access BioLogMe</h2>
      <form action='/login' method='get' onSubmit={handleSubmit}>
        <div className='mb-3'>
          <br />
          <input
            type='email'
            name='email'
            id='email'
            className='form-control'
            placeholder='Enter email'
            value={user.email}
            onChange={e => setUser({ ...user, email: e.target.value })}
            required
          />
          <br />
          <input
            type='text'
            name='password'
            id='password'
            className='form-control'
            placeholder='Enter password'
            value={user.password}
            onChange={e => setUser({ ...user, password: e.target.value })}
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
