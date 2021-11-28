import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';

import '../styles/createLog.css';

export default function CreateActivityLog() {
  return (
    <div className='container-sm'>
      <h1>Create your activity list</h1>
      <Form.Group action='' method='post' className='mb-3'>
        <Form.Control
          type='text'
          name='add-activity'
          id='add-activity'
          placeholder='Type activity here'
        />
        <Button
          variant='primary'
          className='activity-button'
          id='add-activity-button'>
          Add Activity
        </Button>
        <Button
          variant='primary'
          className='activity-button'
          id='add-activity-button'>
          View Activity List
        </Button>
      </Form.Group>
    </div>
  );
}
