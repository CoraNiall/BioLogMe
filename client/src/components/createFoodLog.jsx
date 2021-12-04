import React from 'react';

import '../styles/createLog.css';

export default function CreateFoodLog() {
  return (
    <div className='container-sm col-md-8'>
      <h2>Create your food list</h2>
      <form action='' method='post' className='mb-3'>
        <input
          type='text'
          name='food-list'
          id='food-list'
          className='form-control'
          placeholder='Start typing food'
        />
        <input
          type='submit'
          className='btn btn-success food-input'
          htmlFor='green-list'
          value='Add Green List Item'
        />
        <input
          type='submit'
          className='btn btn-warning food-input'
          htmlFor='amber-list'
          value='Add Amber List Item'
        />
        <input
          type='submit'
          className='btn btn-danger food-input'
          htmlFor='red-list'
          value='Add Red List Item'
        />
        <input
          className='btn btn-primary edit-food-input'
          id='edit-food-input'
          value='Edit Food Lists'
        />
      </form>
    </div>
  );
}
