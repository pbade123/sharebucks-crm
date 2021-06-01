import { Form } from 'react-bootstrap';
import styled from 'styled-components';

const Input = () => (
  <Wrapper>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Wrapper>
);

export default Input;

const Wrapper = styled.div`
  .form-group {
    transition: all 0.3s;
  }

  .form-label {
    font-size: 1em;
    color: #aaaaaa;
    display: block;
    opacity: 1;
    transform: translateY(2.8em);
    transform-origin: 0 0;
    transition: all 0.3s;
  }

  .form-control {
    box-shadow: none;
    background-color: transparent;
    border-radius: 0px;
    border-color: #ccc;
    border-style: none none solid none;
    width: 100%;
    transform: all 0.5s;
    padding: 5px;
  }
  .form-control::placeholder {
    color: transparent;
  }

  .form-control:focus {
    box-shadow: none;
    outline: none;
    border-color: ${(props) => props.theme.primary};
    border-width: 2px;
  }

  /* .form-control:not(:placeholder-shown) + .form-control {
    border-color: ${(props) => props.theme.primary};
    border-width: 2px;
  } */

  .form-group:focus-within > .form-label {
    transform: translateY(1.2em) scale(0.8);
    color: ${(props) => props.theme.primary};
  }
`;
