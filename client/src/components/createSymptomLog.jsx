import React from 'react';

import '../styles/createLog.css';

export default function CreateSymptomLog() {
  return (
    <div className='container-sm col-md-8'>
      <h1>Create your symptom list</h1>
      <form action='' method='post' className='mb-3'>
        <input
          type='text'
          name='add-symptom'
          id='add-symptom'
          className='form-control'
          placeholder='Type symptom here'
        />
        <input
          className='btn btn-primary symptom-input'
          id='add-symptom-input'
          value='Add Symptom'
        />
        <input
          className='btn btn-primary symptom-input'
          id='add-symptom-input'
          value='View Symptom List'
        />
      </form>
    </div>
  );
}
