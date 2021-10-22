import React from 'react';
import './App.css';
import UserDashboard from './components/userDashboard';
import UserProfile from './components/userProfileForm';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='Main-wrapper'>
      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <UserProfile />
            <UserDashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
