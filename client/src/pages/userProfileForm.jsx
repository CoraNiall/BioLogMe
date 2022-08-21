import React from 'react';
import CreateFoodLog from '../components/createFoodLog';
import CreateActivityLog from '../components/createActivityLog';
import CreateSymptomLog from '../components/createSymptomLog';

import '../styles/log.css';
import HeaderNav from '../components/headerNav';

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
