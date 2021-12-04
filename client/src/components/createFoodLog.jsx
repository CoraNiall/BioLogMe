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
        <button
          type='submit'
          className='btn btn-success food-input'
          htmlFor='green-list'>
          Add Green List Item
        </button>
        <button
          type='submit'
          className='btn btn-warning food-input'
          htmlFor='amber-list'>
          Add Amber List Item
        </button>
        <button
          type='submit'
          className='btn btn-danger food-input'
          htmlFor='red-list'>
          Add Red List Item
        </button>
        <button
          className='btn btn-primary edit-food-input'
          id='edit-food-input'>
          Edit Food Lists
        </button>
      </form>
    </div>
  );
}
