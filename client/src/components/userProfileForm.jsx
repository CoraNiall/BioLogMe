import React from 'react';
import CreateFoodLog from './createFoodLog';
import CreateActivityLog from './createActivityLog';
import CreateSymptomLog from './createSymptomLog';

import '../styles/log.css';
import HeaderNav from './headerNav';

export default function UserProfile() {
  return (
    <>
      <HeaderNav />
      <div className='container-fluid profile-container'>
        <h1>Profile Page</h1>
        <div>
          <CreateFoodLog />
        </div>
        <div>
          <CreateActivityLog />
        </div>
        <div>
          <CreateSymptomLog />
        </div>
      </div>
    </>
  );
}
