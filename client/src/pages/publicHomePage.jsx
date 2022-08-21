import React from 'react';
import './../styles/log.css';

export default function PublicHomePage() {
  return (
    <div className='container-sm col-md-8'>
      <h2>Welcome to BioLogMe</h2>
      <a href='/login' className='btn btn-primary sign-in'>
        Sign In
      </a>
      <a href='/register' className='btn btn-primary register'>
        Register
      </a>
    </div>
  );
}
