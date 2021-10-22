import React from 'react';

// TODO: this slider is broken and needs fixing
export default function Slider() {
  const handleSlider = () => {
    let slider = document.getElementById('mood-slider');
    let output = document.getElementById('mood-output');
    output.innerHTML = slider.value;

    slider.oninput = function () {
      output.innerHTML = this.value;
    };
  };

  return (
    <div className='mood-slider' id='mood-slider'>
      <h3>Mood score:</h3>
      <p id='mood-output'></p>
      <input
        type='range'
        min='1'
        max='10'
        step='1'
        value='1'
        className='slider'
        onChange={handleSlider}
      />
    </div>
  );
}
