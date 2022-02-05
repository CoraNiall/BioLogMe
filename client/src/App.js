import React from 'react';
import './App.css';
import UserDashboard from './components/userDashboard';
import UserProfile from './components/userProfileForm';
import HeaderNav from './components/headerNav';
import Register from './components/register';
import Login from './components/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='Main-wrapper'>
      <BrowserRouter>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
        <Switch>
          <Route path='/register'>
            <Register />
          </Route>
        </Switch>
        <Switch>
          <Route path='/home'>
            <HeaderNav />
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
            <HeaderNav />
            <UserDashboard />
          </Route>
        </Switch>
        <Switch>
          <Route path='/profile-page'>
            <HeaderNav />
            <UserProfile />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
