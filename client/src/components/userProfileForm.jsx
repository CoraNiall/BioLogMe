import React from 'react';
import Form from 'react-bootstrap/Form';

export default function UserProfile() {
  return (
    <Form>
      <div className='user-profile-form'>
        <Form.Label htmlFor='name'>Enter your name: </Form.Label>
        <Form.Control type='text' name='name' id='name' required />
      </div>
      <div className='user-profile-form'>
        <Form.Label htmlFor='email'>Enter your email: </Form.Label>
        <Form.Control type='email' name='email' id='email' required />
        <Form.Control type='submit' />
      </div>
    </Form>
  );
}
