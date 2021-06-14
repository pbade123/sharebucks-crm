/* eslint-disable no-unused-vars */
import { func, string } from 'prop-types';
import { Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Input = ({ type, placeholder, label, id, onChange, ...props }) => (
  <Wrapper>
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label>{label}</Form.Label>
      <FormControl type={type} placeholder={label} onChange={onChange} {...props} />
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
    color: transparent;
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
    color: #aaaaaa;
  }

  .form-control:focus {
    box-shadow: none;
    outline: none;
    border-color: ${(props) => props.theme.primary};
    border-width: 2px;
  }
  .form-group:focus-within > .form-control::placeholder {
    /* transform: translateY(1.2em) scale(0.8); */
    color: ${(props) => props.theme.primary};
  }

  .form-control:not(:placeholder-shown) > .form-label {
    transform: translateY(1.2em) scale(0.8);
    color: ${(props) => props.theme.primary};
  }
`;

Input.defaultProps = {
  placeholder: 'Enter',
  onChange: () => {},
};

Input.propTypes = {
  type: string.isRequired,
  placeholder: string,
  label: string.isRequired,
  id: string.isRequired,
  onChange: func,
};
