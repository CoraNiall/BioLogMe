import React from 'react';
import Form from 'react-bootstrap/Form';

export default function ActivityLog() {
  return (
    <Form.Group action='' method='post' className='activity-form'>
      <div className='activity-form'>
        <Form.Label htmlFor='name'>Enter your name: </Form.Label>
        <Form.Control type='text' name='name' id='name' required />
      </div>
      <div className='activity-form'>
        <Form.Label htmlFor='email'>Enter your email: </Form.Label>
        <Form.Control type='email' name='email' id='email' required />
      </div>
      <div className='activity-form'>
        <Form.Control type='submit' value='Log your activity!' />
      </div>
    </Form.Group>
  );
}
