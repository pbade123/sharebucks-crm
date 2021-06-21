import React from 'react';

import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { userLogoutRequest } from '../../store/actions/userState';

const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button variant="primary" onClick={() => dispatch(userLogoutRequest())}>
        Lgout
      </Button>
    </div>
  );
};

export default Dashboard;
