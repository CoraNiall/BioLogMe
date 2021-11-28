import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import './../styles/log.css';

export default function SleepLog() {
  return (
    <div className='container-sm'>
      <h1>Add your sleep</h1>
      <Form.Group action='' method='post' className='mb-3'>
        <Form.Label>Sleep start: </Form.Label>
        <Form.Control
          type='time'
          name='sleep-start'
          id='sleep-start'
          required
        />
        <Form.Label>Sleep end: </Form.Label>
        <Form.Control type='time' name='sleep-end' id='sleep-end' required />
        <Form.Label>Time spent awake: </Form.Label>
        <Form.Control
          type='number'
          name='time-awake'
          id='time-awake'
          min='0.5'
          max='8'
          step='0.5'
        />
        <Button
          variant='primary'
          className='sleep-button'
          id='add-sleep-button'>
          Log Sleep
        </Button>
      </Form.Group>
    </div>
  );
}
