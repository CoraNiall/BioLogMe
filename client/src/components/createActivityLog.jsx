import React from 'react';

import '../styles/createLog.css';

export default function CreateActivityLog() {
  return (
    <div className='container-sm col-md-8'>
      <h2>Add to your activity list</h2>
      <form action='' method='post' className='mb-3'>
        <input
          type='text'
          name='add-activity'
          className='form-control'
          id='add-activity'
          placeholder='Type activity here'
        />
        <button
          className='btn btn-primary activity-input'
          id='add-activity-input'>
          Add Activity
        </button>
        <button
          className='btn btn-primary activity-input'
          id='add-activity-input'>
          View Activity List
        </button>
      </form>
    </div>
  );
}
