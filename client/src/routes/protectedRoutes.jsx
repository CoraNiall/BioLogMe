import React from 'react';
import { Navigate, Outlet } from 'react-router';

export function ProtectedRoutes({ userToken, loggedInUser, children }) {
  let auth = { token: userToken };
  if (auth.token) {
    return <Outlet loggedInUser={loggedInUser} children={children} />;
  } else {
    return <Navigate to='/login' replace={true} />;
  }
}
