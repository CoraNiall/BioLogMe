import React from 'react';
import './App.css';
import UserDashboard from './components/userDashboard';
import UserProfile from './components/userProfileForm';
import HeaderNav from './components/headerNav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='Main-wrapper'>
      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <HeaderNav />
            <h2>Eventually this will be a login page</h2>
          </Route>
        </Switch>
        <Switch>
          <Route path='/home'>
            <h1>Welcome to BioLog Me</h1>
            <h2>This is the Home page</h2>
            <h3>
              This is where the user will eventually see their data
              visualisations
            </h3>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
