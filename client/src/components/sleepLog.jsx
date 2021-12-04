import React from 'react';

import './../styles/log.css';

export default function SleepLog() {
  return (
    <div className='container-sm col-md-8'>
      <h2>Add your sleep</h2>
      <form action='' method='post' className='mb-3'>
        <label>Sleep start: </label>
        <input
          className='form-control'
          type='time'
          name='sleep-start'
          id='sleep-start'
          required
        />
        <label>Sleep end: </label>
        <input
          className='form-control'
          type='time'
          name='sleep-end'
          id='sleep-end'
          required
        />
        <label>Time spent awake: </label>
        <input
          className='form-control'
          type='number'
          name='time-awake'
          id='time-awake'
          min='0.5'
          max='8'
          step='0.5'
        />
        <input
          className='btn btn-primary sleep-input'
          id='add-sleep-input'
          value='Log Sleep'
        />
      </form>
    </div>
  );
}
