import React from 'react';
import { Navigate, Outlet } from 'react-router';

export function ProtectedRoutes() {
  let auth = { "token": true };
  return auth.token ? <Outlet /> : <Navigate to='/login' replace={true} />;
}
