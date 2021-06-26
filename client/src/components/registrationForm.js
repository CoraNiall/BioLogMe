import React from 'react';

export default class RegistrationForm extends React.Component {
    render() {
      return (
        <form>
          <h1>Hello</h1>
          <p>Enter your name:</p>
          <input
            type="text"
          />
          <p>Date of birth:</p>
          <input
            type="date"
          />
          <p>Choose a  username:</p>
          <input
            type="text"
          />
          <p>Choose a password:</p>
          <input
            type="text"
          />
          <p>Re-type your password (just so we're sure of it):</p>
          <input
            type="text"
          />
        </form>
      );
    }
  };