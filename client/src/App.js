import React from 'react';
import './App.css';
import UserDashboard from './components/userDashboard';
import SleepLog from './components/sleepLog';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='Main-wrapper'>
      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <UserDashboard />
            <SleepLog />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
