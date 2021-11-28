import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

export default function SymptomLog() {
  return (
    <div className='container-sm'>
      <h1>Log your symptom</h1>
      <Form.Group action='' method='post' className='mb-3'>
        <Button
          variant='primary'
          className='symptom-button'
          id='add-symptom-button'>
          Log Symptom
        </Button>
      </Form.Group>
    </div>
  );
}
