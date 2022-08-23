import React from 'react';
import { Link } from 'react-router-dom';

import './../styles/nav.css';

export default function Headerdiv() {
  return (
    <nav
      className='navbar navbar-expand-lg navbar-light bg-light justify-content-end'
      role='navigation'>
      <ul className='nav nav-pills nav-fill'>
        <div className='me-auto'>
          <li className='nav-item'>
            {' '}
            <Link to='/home' className='nav-link'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            {' '}
            <Link to='/user-dashboard' className='nav-link'>
              Dashboard
            </Link>
          </li>
          <li className='nav-item'>
            {' '}
            <Link to='/profile-page' className='nav-link'>
              Profile
            </Link>
          </li>
          <li className='nav-item'>
            {' '}
            <Link to='/' className='nav-link'>
              Log Out
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
