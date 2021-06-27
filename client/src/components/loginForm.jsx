import React from 'react';

function LoginForm() {
      return (
        <div className='container'>
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
        </div>
      );
    }
  
export default LoginForm;