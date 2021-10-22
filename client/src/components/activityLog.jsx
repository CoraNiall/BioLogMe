import React from 'react';

export default function ActivityLog() {
  return (
    <form action='' method='post' className='activity-form'>
      <div className='activity-form'>
        <label for='name'>Enter your name: </label>
        <input type='text' name='name' id='name' required />
      </div>
      <div className='activity-form'>
        <label for='email'>Enter your email: </label>
        <input type='email' name='email' id='email' required />
      </div>
      <div className='activity-form'>
        <input type='submit' value='Log your activity!' />
      </div>
    </form>
  );
}
