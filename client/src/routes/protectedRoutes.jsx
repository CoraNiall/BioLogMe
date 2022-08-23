import React from 'react';
import { Navigate, Outlet } from 'react-router';

export function ProtectedRoutes({ userToken, children }) {
  let auth = { token: userToken };
  if (auth.token) {
    return <Outlet children={children} />;
  } else {
    return <Navigate to='/login' replace={true} />;
  }
}
