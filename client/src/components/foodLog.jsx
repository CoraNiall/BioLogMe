import React from 'react';
import Form from 'react-bootstrap/Form';

export default function FoodLog() {
  return (
    <Form.Group action='' method='post' className='food-form'>
      <div className='food-form'>
        <Form.Control type='submit' value='Log your Food!' />
      </div>
    </Form.Group>
  );
}
