import React from 'react';
import './App.css';
import UserDashboard from './pages/userDashboard';
import UserProfile from './pages/userProfileForm';
import HomeVisualisation from './pages/homeVisualisation';
import Register from './pages/register';
import Login from './pages/login';
import PublicHomePage from './pages/publicHomePage';
import useToken from './components/useToken';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProtectedRoutes } from './routes/protectedRoutes';

function App() {
  const { token, setToken } = useToken();

  return (
    <div className='Main-wrapper'>
      <Router>
        <Routes>
          <Route path='/' element={<PublicHomePage />} />
          <Route path='/login' element={<Login setToken={setToken} />} />
          <Route path='/register' element={<Register />} />
          <Route element={<ProtectedRoutes userToken={token} children />}>
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
