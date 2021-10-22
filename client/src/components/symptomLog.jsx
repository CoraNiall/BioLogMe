import React from 'react';

export default function SymptomLog() {
  return (
    <form action='' method='post' className='symptom-form'>
      <div className='symptom-form'>
        <label for='name'>Enter your name: </label>
        <input type='text' name='name' id='name' required />
      </div>
      <div className='symptom-form'>
        <label for='email'>Enter your email: </label>
        <input type='email' name='email' id='email' required />
      </div>
      <div className='symptom-form'>
        <input type='submit' value='Log your symptom!' />
      </div>
    </form>
  );
}
