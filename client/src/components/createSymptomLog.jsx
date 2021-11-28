import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';

import '../styles/createLog.css';

export default function CreateSymptomLog() {
  return (
    <div className='container-sm'>
      <h1>Create your symptom list</h1>
      <Form.Group action='' method='post' className='mb-3'>
        <Form.Control
          type='text'
          name='add-symptom'
          id='add-symptom'
          placeholder='Type symptom here'
        />
        <Button
          variant='primary'
          className='symptom-button'
          id='add-symptom-button'>
          Add Symptom
        </Button>
        <Button
          variant='primary'
          className='symptom-button'
          id='add-symptom-button'>
          View Symptom List
        </Button>
      </Form.Group>
    </div>
  );
}
