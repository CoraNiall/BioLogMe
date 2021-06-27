import React, { useState } from 'react';
import axios from 'axios';

export default function RegistrationForm() {

  const [input, setInput] = useState({
    email: '',
    userName: '',
    password: '',
    loggedIn: false
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }

  const handleClick = (event) => {
    event.preventDefault();

    const newUser = {
      email: input.email,
      userName: input.userName,
      password: input.password
    }
    axios.post('http://localhost:8080/register', newUser)
  }

      return (
        <div className='container'>
          <form>
          <h1>Hello</h1>
          <p>Enter your email address:</p>
          <input
            type="text"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
          <p>Enter a username:</p>
          <input
            type="text"
            name="userName"
            value={input.userName}
            onChange={handleChange}
          />
          <p>Enter a password:</p>
          <input
            type="text"
            name= "password"
            value={input.password}
            onChange={handleChange}
          />
          <p>Re-type your password:</p>
          <input
            type="text"
          />
          <button type='submit' onClick={handleClick}>Submit</button>
        </form>
        </div>
      );
    };
