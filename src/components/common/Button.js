import { bool, string } from 'prop-types';
import { Button as Btn, Spinner } from 'react-bootstrap';
import styled from 'styled-components';

const Button = ({ title, className, loading }) => (
  <ButtonWrapper className={className}>
    <Btn type="submit" variant="primary">
      {loading ? <Spinner animation="border" variant="primary" /> : title}
    </Btn>
  </ButtonWrapper>
);

export default Button;

const ButtonWrapper = styled.div`
  .btn-primary {
    background-color: ${(props) => props.theme.primary};
    transition: all 300ms ease-in;
    border-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
    border-radius: 40px;
    padding: 0.6rem 0.75rem;
    width: 100%;
    box-shadow: 0px 3px 6px #00000029;
    transition: background-color 0.3s;
    &:hover {
      background-color: ${(props) => props.theme.primaryHover};
    }
  }
  .btn-primary:not(:disabled):not(.disabled):active {
    background-color: ${(props) => props.theme.primaryHover};
    box-shadow: 0px 3px 6px #00000029;
  }

  .text-primary {
    color: ${(props) => props.theme.elephant} !important;
  }
`;

Button.defaultProps = {
  title: '',
  className: '',
  loading: false,
};

Button.propTypes = {
  title: string,
  className: string,
  loading: bool,
};
