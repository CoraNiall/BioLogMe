import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import './../styles/log.css';

export default function ActivityLog() {
  return (
    <div className='container-sm'>
      <h1>Add your activity</h1>
      <Form.Group action='' method='post' className='mb-3'>
        <Form.Control
          type='text'
          name='add-activity'
          id='add-activity'
          placeholder='Start typing activity here'
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
          Visualise Activity
        </Button>
      </Form.Group>
    </div>
  );
}
