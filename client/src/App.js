import React from 'react';
import './App.css';
import UserDashboard from './components/userDashboard';
import UserProfile from './components/userProfileForm';
import HomeVisualisation from './components/homeVisualisation';
import Register from './components/register';
import Login from './components/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProtectedRoutes } from './routes/protectedRoutes';

function App() {
  return (
    <div className='Main-wrapper'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/home' element={<HomeVisualisation />} />
            <Route path='/user-dashboard' element={<UserDashboard />} />
            <Route path='/profile-page' element={<UserProfile />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
