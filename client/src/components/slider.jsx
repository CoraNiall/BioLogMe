import React, { useState } from 'react';

import './../styles/log.css';

export default function Slider() {
  let defaultValue = 0;

  const [sliderValue, setValue] = useState(defaultValue);

  const handleSlider = e => {
    setValue(e.target.value);
  };

  return (
    <div className='container-sm'>
      <form id='mood-slider'>
        <h2>Mood score:</h2>
        <input
          className='w-100 p-3'
          type='range'
          id='range'
          min='0'
          max='10'
          step='1'
          defaultValue={sliderValue}
          onClick={handleSlider}
        />
        <br />
        <label>Value: {sliderValue}</label>
        <br />
        <input
          variant='primary'
          value='Log Mood Score'
          className='btn btn-primary mood-input'
          id='add-mood-input'
        />
      </form>
    </div>
  );
}
