import React from 'react';

import '../styles/createLog.css';

export default function CreateActivityLog() {
  return (
    <div className='container-sm col-md-8'>
      <h2>Create your activity list</h2>
      <form action='' method='post' className='mb-3'>
        <input
          type='text'
          name='add-activity'
          className='form-control'
          id='add-activity'
          placeholder='Type activity here'
        />
        <input
          className='btn btn-primary activity-input'
          id='add-activity-input'
          value='Add Activity'
        />
        <input
          variant='primary'
          className='btn btn-primary activity-input'
          id='add-activity-input'
          value='View Activity List'
        />
      </form>
    </div>
  );
}
