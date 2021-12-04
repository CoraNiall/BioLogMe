import React from 'react';

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
            <a href='/home' className='nav-link'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            {' '}
            <a href='/user-dashboard' className='nav-link'>
              Dashboard
            </a>
          </li>
          <li className='nav-item'>
            {' '}
            <a href='/profile-page' className='nav-link'>
              Profile
            </a>
          </li>
          <li className='nav-item'>
            {' '}
            <a href='/login' className='nav-link'>
              Log Out
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
