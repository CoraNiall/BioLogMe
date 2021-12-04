import React from 'react';
import './../styles/log.css';

export default function ActivityLog() {
  return (
    <div className='container-sm col-md-8'>
      <h2>Add your activity</h2>
      <form action='' method='post' className='mb-3'>
        <input
          type='text'
          name='add-activity'
          className='form-control'
          id='add-activity'
          placeholder='Start typing activity here'
        />
        <button
          className='btn btn-primary activity-input'
          id='add-activity-input'>
          Add Activity
        </button>
        <button
          className='btn btn-primary activity-input'
          id='view-activity-input'>
          Visualise Activity
        </button>
      </form>
    </div>
  );
}
