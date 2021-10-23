import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import CreateFoodLog from './createFoodLog';
import CreateActivityLog from './createActivityLog';

import '../styles/userProfileForm.css';

export default function UserProfile() {
  return (
    <Form>
      <div className='container-sm'>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='name'>Enter your name: </Form.Label>
          <Form.Control type='text' name='name' id='name' required />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='email'>Enter your email: </Form.Label>
          <Form.Control type='email' name='email' id='email' required />
          <Button className='profile-button' variant='primary'>
            Submit
          </Button>
        </Form.Group>
      </div>
      <CreateFoodLog />
      <CreateActivityLog />
    </Form>
  );
}
