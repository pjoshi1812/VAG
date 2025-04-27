import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, allowedRole }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && user.userType !== allowedRole) {
    
    return <Navigate to="/" replace />;
  }


  return element;
};

export default ProtectedRoute;