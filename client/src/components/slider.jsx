import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import './../styles/log.css';

export default function Slider() {
  let defaultValue = 0;

  const [sliderValue, setValue] = useState(defaultValue);

  const handleSlider = e => {
    setValue(e.target.value);
  };

  return (
    <div className='container-sm'>
      <Form.Group id='mood-slider'>
        <Form.Label>Mood score:</Form.Label>
        <Form.Range
          id='range'
          min='0'
          max='10'
          step='1'
          defaultValue={sliderValue}
          onClick={handleSlider}
        />
        <br />
        <Form.Label>Value: {sliderValue}</Form.Label>
        <Button variant='primary' className='mood-button' id='add-mood-button'>
          Log Mood Score
        </Button>
      </Form.Group>
    </div>
  );
}
