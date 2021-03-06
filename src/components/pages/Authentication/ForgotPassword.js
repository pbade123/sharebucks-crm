import React, { useState } from 'react';

import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap';

import Backdrop from '../../common/Backdrop';
import Button from '../../common/Button';
import Input from '../../common/Input';

const ForgotPassword = () => {
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
