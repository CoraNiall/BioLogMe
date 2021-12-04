import React from 'react';
import FoodLog from './foodLog';
import SleepLog from './sleepLog';
import ActivityLog from './activityLog';
import SymptomLog from './symptomLog';
import Slider from './slider';

export default function UserDashboard() {
  return (
    <div className='container-fluid dashboard-container'>
      <div>
        <h2>User Dashboard</h2>
      </div>
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
  );
}
