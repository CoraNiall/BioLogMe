import React from 'react';
import FoodLog from '../components/foodLog';
import SleepLog from '../components/sleepLog';
import ActivityLog from '../components/activityLog';
import SymptomLog from '../components/symptomLog';
import Slider from '../components/slider';
import HeaderNav from '../components/headerNav';

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
