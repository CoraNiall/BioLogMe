import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

import '../styles/log.css';

export default function UserDetails() {
  return (
    <div className='container-sm'>
      <Form.Group className='mb-3'>
        <Form.Label htmlFor='name'>Enter your name: </Form.Label>
        <Form.Control type='text' name='name' id='name' required />
        <Form.Label htmlFor='email'>Enter your email: </Form.Label>
        <Form.Control type='text' name='email' id='email' required />
        <Form.Label htmlFor='password'>Enter a password: </Form.Label>
        <Form.Control type='text' name='password' id='password' required />
        <Button className='user-details-button' variant='primary'>
          Submit
        </Button>
      </Form.Group>
    </div>
  );
}
