import React from 'react';

import '../styles/createLog.css';

export default function CreateSymptomLog() {
  return (
    <div className='container-sm col-md-8'>
      <h2>Create your symptom list</h2>
      <form action='' method='post' className='mb-3'>
        <input
          type='text'
          name='add-symptom'
          id='add-symptom'
          className='form-control'
          placeholder='Type symptom here'
        />
        <button
          className='btn btn-primary symptom-input'
          id='add-symptom-input'>
          Add Symptom
        </button>
        <button
          className='btn btn-primary symptom-input'
          id='add-symptom-input'>
          View Symptom List
        </button>
      </form>
    </div>
  );
}
