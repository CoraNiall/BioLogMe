import React from 'react';
import { Navigate, Outlet } from 'react-router';

export function ProtectedRoutes({ userToken }) {
  let auth = { token: userToken };
  if (auth.token) {
    return <Outlet />;
  } else {
    return <Navigate to='/login' replace={true} />;
  }
}
