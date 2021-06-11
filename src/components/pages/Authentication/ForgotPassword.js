import React, { useState } from 'react';

import styled from 'styled-components';
import { Form } from 'react-bootstrap';

import Backdrop from '../../common/Backdrop';
import Button from '../../common/Button';
import Input from '../../common/Input';

const ForgotPassword = () => {
  const [form, setForm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
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
              <h4>Forgot Password?</h4>
              <p>We’ll send you an email with a link to reset your password.</p>
              <Input
                type="email"
                label="Email Address"
                onChange={(e) => setField('email', e.target.value)}
                id="formBasicEmail"
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

export default ForgotPassword;

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
    color: #535353;
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
