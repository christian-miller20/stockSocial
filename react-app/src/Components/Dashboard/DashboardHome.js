import React, { useEffect } from 'react';
import ProtectedRoute from '../../Common/Services/ProtectedRoute';
import DashboardGood from './DashboardGood';

export default function Dashboard() {
  useEffect(() => {
    if (localStorage.getItem('user')) {
      console.log('Authorized user');
    } else {
      console.log('Unauthorized');
    }
  }, []);

  return (
    <div>
      <ProtectedRoute path={`/dashboard`} element={DashboardGood} />
    </div>
  );
}


/*
import React, { useState, useEffect } from 'react';
import ProtectedRoute from '../../Common/Services/ProtectedRoute';
import DashboardGood from './DashboardGood';

export default function Dashboard() {

  useEffect(() => {
    if (localStorage.getItem('user')) {
      console.log('authorized user')
    } else {
      console.log('unauthorized');
    }
  }, []);

  return (
    <div>
      <ProtectedRoute
        path={`/dashboard`}
        element={DashboardGood}
      />
    </div>

  );
}
*/