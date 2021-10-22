import React from 'react';
import Form from 'react-bootstrap/Form';

export default function ActivityLog() {
  return (
    <Form.Group action='' method='post' className='activity-form'>
      <div className='activity-form'>
        <Form.Control type='submit' value='Log your activity!' />
      </div>
    </Form.Group>
  );
}
