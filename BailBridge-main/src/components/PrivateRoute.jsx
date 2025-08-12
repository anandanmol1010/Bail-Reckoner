import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';


export default function PrivateRoute({ children, role }) {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');
  const location = useLocation();

  if (!token || userRole !== role) {
    let loginPath = '/login';
    if (role === 'lawyer') loginPath = '/login-lawyer';
    if (role === 'courtstaff') loginPath = '/login-courtstaff';
    if (role === 'undertrial') loginPath = '/login-undertrial';
    return <Navigate to={loginPath} state={{ from: location }} replace />;
  }
  return children;
}
