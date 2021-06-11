import React from 'react';

import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap';

import Backdrop from '../../common/Backdrop';

const ResendMail = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/reset-password');
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Backdrop
          show
          body={
            <div className="d-flex  flex-column justify-content-center align-items-center mt-5">
              <h4>Check your email.</h4>
              <p>We sent you an email with a link to reset your password.</p>

              <div
                className="d-flex  flex-column justify-content-center align-items-center"
                style={{ marginTop: '5rem ' }}
              >
                <p className="resendMail-text">Resend Email</p>
              </div>
            </div>
          }
        />
      </Form>
    </Wrapper>
  );
};

export default ResendMail;

const Wrapper = styled.div`
  h4 {
    color: ${(props) => props.theme.emperor};
    text-transform: capitalize;
    font-weight: 300;
  }
  p {
    color: ${(props) => props.theme.elephant};
    font-size: 14px;
  }
  .resendMail-text {
    text-decoration-line: underline;
    color: ${(props) => props.theme.rustRed};
    cursor: pointer;
  }
`;
