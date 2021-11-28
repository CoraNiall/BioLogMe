import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../styles/createLog.css';

export default function CreateFoodLog() {
  return (
    <div className='container-sm'>
      <h1>Create your food list</h1>
      <Form.Group action='' method='post' className='mb-3'>
        <Form.Control
          type='text'
          name='food-list'
          id='food-list'
          placeholder='Start typing food'
        />
        <Button variant='success' className='food-button' htmlFor='green-list'>
          Add Green List Item
        </Button>
        <Button variant='warning' className='food-button' htmlFor='amber-list'>
          Add Amber List Item
        </Button>
        <Button variant='danger' className='food-button' htmlFor='red-list'>
          Add Red List Item
        </Button>
      </Form.Group>
    </div>
  );
}
