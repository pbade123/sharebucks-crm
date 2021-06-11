import React, { useState } from 'react';

import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap';

import Backdrop from '../../common/Backdrop';
import Button from '../../common/Button';
import Input from '../../common/Input';

const ResestPassword = () => {
  const [form, setForm] = useState({});
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/reset-password');
  };

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Backdrop
          show
          body={
            <div className="form-inner">
              <h4>Reset Password</h4>
              <p>Please enter a new password below</p>
              <Input
                type="password"
                label="Password"
                id="formBasicPassword"
                onChange={(e) => setField('password', e.target.value)}
              />
              <Input
                type="password"
                label="Confirm password"
                id="formBasicConfirmPassword"
                onChange={(e) => setField('confirm_password', e.target.value)}
              />
              <div
                style={{ marginTop: '5rem ' }}
                className="d-flex justify-content-center align-items-baseline"
              >
                <p className="cancel-text">Cancel</p>
                <Button className="submit-btn" title="Submit" />
              </div>
            </div>
          }
        />
      </Form>
    </Wrapper>
  );
};

export default ResestPassword;

const Wrapper = styled.div`
  .form-outer {
    background-color: white;
    position: absolute;
    top: 20%;
    left: 35%;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    padding: 4rem 8rem;
  }
  .form-inner {
    margin-top: 4rem;
  }

  .form-inner h4 {
    color: ${(props) => props.theme.emperor};
    text-transform: capitalize;
  }

  p {
    color: ${(props) => props.theme.elephant};
    font-size: 14px;
  }
  .cancel-text {
    margin-right: 3.5rem;
    text-decoration-line: underline;
    color: ${(props) => props.theme.rustRed};
  }
  .btn-primary {
    width: 13rem;
  }
`;
