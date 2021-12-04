import React from 'react';
import './../styles/log.css';

export default function ActivityLog() {
  return (
    <div className='container-sm col-md-8'>
      <h1>Add your activity</h1>
      <form action='' method='post' className='mb-3'>
        <input
          type='text'
          name='add-activity'
          className='form-control'
          id='add-activity'
          placeholder='Start typing activity here'
        />
        <input
          className='btn btn-primary activity-input'
          id='add-activity-input'
          value='Add Activity'
        />
        <input
          className='btn btn-primary activity-input'
          id='view-activity-input'
          value='Visualise Activity'
        />
      </form>
    </div>
  );
}
