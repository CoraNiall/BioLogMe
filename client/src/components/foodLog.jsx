import React from 'react';

import './../styles/log.css';

export default function FoodLog() {
  return (
    <div className='container-sm col-md-8'>
      <h2>Add your food</h2>
      <form action='' method='post' className='mb-3'>
        <div className='mb-3'>
          <label className='form-label' htmlFor='breakfast'>
            Breakfast:
          </label>
          <input
            type='text'
            name='breakfast'
            id='breakfast'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='lunch'>Lunch: </label>
          <input
            type='lunch'
            name='lunch'
            id='lunch'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='dinner'>Dinner: </label>
          <input
            type='dinner'
            name='dinner'
            id='dinner'
            className='form-control'
          />
        </div>
        <div className='food-form'>
          <label htmlFor='snacks'>Snacks: </label>
          <input
            type='snacks'
            name='snacks'
            id='snacks'
            className='form-control'
          />
        </div>
        <div className='food-form'>
          <button className='btn btn-primary food-input' id='add-food-input'>
            Log Food
          </button>
        </div>
      </form>
    </div>
  );
}
