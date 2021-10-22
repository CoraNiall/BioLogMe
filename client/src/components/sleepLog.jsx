import React from 'react';
import Form from 'react-bootstrap/Form';
import './../styles/sleepLog.css';

export default function SleepLog() {
  return (
    <Form.Group action='' method='post' className='sleep-form'>
      <div className='sleep-form'>
        <Form.Label>Sleep start: </Form.Label>
        <Form.Control
          type='time'
          name='sleep-start'
          id='sleep-start'
          required
        />
      </div>
      <div className='sleep-form'>
        <Form.Label>Sleep end: </Form.Label>
        <Form.Control type='time' name='sleep-end' id='sleep-end' required />
      </div>
      <div className='sleep-form'>
        <Form.Label>Time spent awake: </Form.Label>
        <Form.Control
          type='number'
          name='time-awake'
          id='time-awake'
          min='0.5'
          max='8'
          step='0.5'
        />
      </div>
      <div className='sleep-form'>
        <Form.Control type='submit' value='Log your sleep!' />
      </div>
    </Form.Group>
  );
}
