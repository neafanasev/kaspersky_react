import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Welcome from './components/Welcome/Welcome';
import Users from './components/Users/UsersPage';

const AppRoutes = () => (
  <Routes>
    <Route path='/users/*' element={<Users />} />

    <Route path='/' element={<Welcome />} />

    <Route path='*' element={<div>404 NOT FOUND</div>} />

  </Routes>
);

export default AppRoutes;