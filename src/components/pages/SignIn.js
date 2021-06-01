import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import Input from '../common/Input';
import logoName from '../../assets/images/login-logo.png';
import Button from '../common/Button';
// import Input from '../common/Input';

const SignIn = () => (
  <Wrapper>
    <Container fluid>
      <Row>
        <Col xl={7} className="pl-0 pr-0">
          <Banner alt="Sharebucks SignIn" />
        </Col>
        <Col className=" login-form d-flex flex-column justify-content-center ">
          <img className="logo-name" src={logoName} alt="company logo" />
          <h1 className="heading">Welcome Back</h1>
          <p>Please sign into your account</p>
          <Input />
          <Button className="signIn-btn" title="Sign In" />
        </Col>
      </Row>
    </Container>
  </Wrapper>
);

export default SignIn;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.white};
  .login-form {
    margin: 0 auto;
    max-width: 450px;
  }
  .logo-name {
    width: 212px;
    height: 30px;
    margin-bottom: 3rem;
  }
  .heading {
    color: ${(props) => props.theme.swampBlack};
    font-weight: 300;
  }
  p {
    color: ${(props) => props.theme.elephant};
    font-size: 20px;
  }
  .signIn-btn {
    margin: 4rem 0;
  }
`;

const Banner = styled.div`
  background-image: url('https://www.crm-stage.sharebucks.io/static/media/login-banner-img.bc29c0be.jpg');
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;
