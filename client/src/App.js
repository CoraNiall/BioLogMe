import React from 'react';
import './App.css';
import UserDashboard from './components/userDashboard';
import UserProfile from './components/userProfileForm';
import HeaderNav from './components/headerNav';
import HomeVisualisation from './components/homeVisualisation';
import Register from './components/register';
import Login from './components/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='Main-wrapper'>
      <HeaderNav />
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<HomeVisualisation />} />
          <Route path='/user-dashboard' element={<UserDashboard />} />
          <Route path='/profile-page' element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
