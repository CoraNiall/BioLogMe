import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

export default function Slider() {
  let defaultValue = 0;

  const [sliderValue, setValue] = useState(defaultValue);

  const handleSlider = e => {
    setValue(e.target.value);
  };

  return (
    <>
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
      </Form.Group>
    </>
  );
}
