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
            <h1>Welcome to BioLog Me</h1>
            <h2>Eventually this will be a login page</h2>
          </Route>
        </Switch>
        <Switch>
          <Route path='/user-dashboard'>
            <UserDashboard />
          </Route>
        </Switch>
        <Switch>
          <Route path='/profile-page'>
            <UserProfile />
          </Route>
        </Switch>
        <Switch>
          <Route path='/view-charts'>
            <h1>
              This is where the user will eventually see their data
              visualisations
            </h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
