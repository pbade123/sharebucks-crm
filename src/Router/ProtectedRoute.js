/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { checkAuthentication } from '../store/actions/userState';

const ProtectedRoute = ({ component: Component, render, ...rest }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuthenticated);
  useEffect(() => {
    dispatch(checkAuthentication());
  }, [dispatch]);

  useEffect(() => {
    console.log('isAuth', isAuth);
  }, [isAuth]);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return Component ? <Component {...props} /> : render(props);
        }

        return <Redirect to="/signin" />;
      }}
    />
  );
};

export default ProtectedRoute;
