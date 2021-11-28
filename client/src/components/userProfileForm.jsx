import React from 'react';
import CreateFoodLog from './createFoodLog';
import CreateActivityLog from './createActivityLog';
import CreateSymptomLog from './createSymptomLog';
import UserDetails from './userDetails';

import '../styles/log.css';

export default function UserProfile() {
  return (
    <>
      <h1>Profile Page</h1>
      <UserDetails />
      <CreateFoodLog />
      <CreateActivityLog />
      <CreateSymptomLog />
    </>
  );
}
