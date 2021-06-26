import React from 'react';

export default class LoginForm extends React.Component {
    render() {
      return (
        <form>
          <h1>Please log in</h1>
          <p>Username:</p>
          <input
            type="text"
          />
          <p>Password:</p>
          <input
            type="text"
          />
        </form>
      );
    }
  };