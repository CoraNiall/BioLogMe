import React from 'react';
import './../styles/sleepLog.css';
import Slider from './slider';

export default function SleepLog() {
  return (
    <form action='' method='post' className='sleep-form'>
      <div className='sleep-form'>
        <label>Sleep start: </label>
        <input type='time' name='sleep-start' id='sleep-start' required />
      </div>
      <div className='sleep-form'>
        <label>Sleep end: </label>
        <input type='time' name='sleep-end' id='sleep-end' required />
      </div>
      <div className='sleep-form'>
        <label>Time spent awake: </label>
        <input
          type='number'
          name='time-awake'
          id='time-awake'
          min='0.5'
          max='8'
          step='0.5'
        />
      </div>
      <Slider />
      <div className='sleep-form'>
        <input type='submit' value='Log your sleep!' />
      </div>
    </form>
  );
}
