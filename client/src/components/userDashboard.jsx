import React from 'react';
import FoodLog from './foodLog';
import SleepLog from './sleepLog';
import ActivityLog from './activityLog';
import SymptomLog from './symptomLog';
import Slider from './slider';
import HeaderNav from './headerNav';

export default function UserDashboard() {
  return (
    <>
      <HeaderNav />
      <div className='container-fluid dashboard-container'>
        <h1>User Dashboard</h1>
        <div>
          <ActivityLog />
        </div>
        <div>
          <FoodLog />
        </div>
        <div>
          <SleepLog />
        </div>
        <div>
          <SymptomLog />
        </div>
        <div>
          <Slider />
        </div>
      </div>
    </>
  );
}
