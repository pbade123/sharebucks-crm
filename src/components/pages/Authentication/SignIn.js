/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Input from '../../common/Input';
import logoName from '../../../assets/images/login-logo.png';
import Button from '../../common/Button';
import { signIn } from '../../../store/actions/userState';

const SigninSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Email is invalid'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SignIn = () => {
  const error = useSelector((state) => state.user.userError);
  const isLoading = useSelector((state) => state.user.isLoading);
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(SigninSchema),
  });

  useEffect(() => {
    if (error !== null) {
      setError('password', {
        type: 'manual',
        message: error.error_description,
      });
    }
  }, [error, setError]);

  const onSubmit = (data) => {
    dispatch(signIn(data, history));
  };

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return (
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
            <Form noValidate validated={false} onSubmit={handleSubmit(onSubmit)}>
              <Input
                {...register('email')}
                error={errors.email}
                type="email"
                label="Enter email"
                id="formBasicEmail"
                onChange={(e) => setField('email', e.target.value)}
              />
              <Input
                {...register('password')}
                error={errors.password}
                type="password"
                label="Enter password"
                id="formBasicPassword"
                onChange={(e) => setField('password', e.target.value)}
              />
              <Link to="/forgot-password" className="forgotLink">
                Forgot Password?
              </Link>

              <Button loading={isLoading} className="signIn-btn" title="Sign In" />
            </Form>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

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
  .forgotLink {
    float: right;
    color: ${(props) => props.theme.primary};
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
