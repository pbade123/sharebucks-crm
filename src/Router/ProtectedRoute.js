/* eslint-disable react/prop-types */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ isAuth, component: Component, ...rest }) => (
  <Route {...rest} render={isAuth ? <Component /> : <Redirect to="/login" />} />
);

export default ProtectedRoute;
