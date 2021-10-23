import React from 'react';
import Form from 'react-bootstrap/Form';

export default function FoodLog() {
  return (
    <div className='container-sm'>
      <Form.Group action='' method='post' className='food-form'>
        <div className='mb-3'>
          <Form.Label className='form-label' htmlFor='breakfast'>
            Breakfast:
          </Form.Label>
          <Form.Control
            className='form-control'
            type='text'
            name='breakfast'
            id='breakfast'
          />
        </div>
        <div className='mb-3'>
          <Form.Label htmlFor='lunch'>Lunch: </Form.Label>
          <Form.Control type='lunch' name='lunch' id='lunch' />
        </div>
        <div className='mb-3'>
          <Form.Label htmlFor='dinner'>Dinner: </Form.Label>
          <Form.Control type='dinner' name='dinner' id='dinner' />
        </div>
        <div className='food-form'>
          <Form.Label htmlFor='snacks'>Snacks: </Form.Label>
          <Form.Control type='snacks' name='snacks' id='snacks' />
        </div>
        <div className='food-form'>
          <Form.Control type='submit' value='Log your food!' />
        </div>
      </Form.Group>
    </div>
  );
}
