import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import './../styles/log.css';

export default function FoodLog() {
  return (
    <div className='container-sm'>
      <h1>Add your food</h1>
      <Form.Group action='' method='post' className='mb-3'>
        <div className='mb-3'>
          <Form.Label className='form-label' htmlFor='breakfast'>
            Breakfast:
          </Form.Label>
          <Form.Control type='text' name='breakfast' id='breakfast' />
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
          <Button
            variant='primary'
            className='food-button'
            id='add-food-button'>
            Log Food
          </Button>
        </div>
      </Form.Group>
    </div>
  );
}
