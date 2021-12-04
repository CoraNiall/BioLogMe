import React from 'react';

import './../styles/log.css';

export default function SymptomLog() {
  return (
    <div className='container-sm col-md-8'>
      <h1>Log your symptom</h1>
      <form action='' method='post' className='mb-3'>
        <label className='form-label' htmlFor='symptoms'>
          Symptom:
        </label>
        <input
          type='text'
          name='symptom'
          id='symptom'
          className='form-control'
        />
        <input
          className='btn btn-primary symptom-input'
          id='add-symptom-input'
          value='Log Symptom'
        />
      </form>
    </div>
  );
}
