import React from 'react';
import Form from 'react-bootstrap/Form';

export default function SymptomLog() {
  return (
    <Form.Group action='' method='post' className='symptom-form'>
      <div className='symptom-form'>
        <Form.Control type='submit' value='Log your symptom!' />
      </div>
    </Form.Group>
  );
}
