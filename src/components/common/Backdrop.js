import React from 'react';

import { node } from 'prop-types';
import styled from 'styled-components';

import logoName from '../../assets/images/login-logo.png';

const Backdrop = ({ body }) => (
  <BackDropWrapper>
    <BackgroundImg>
      <div className="form-outer">
        <img className="logo-name" src={logoName} alt="company logo" />

        {body}
      </div>
    </BackgroundImg>
  </BackDropWrapper>
);

export default Backdrop;

const BackDropWrapper = styled.div`
  img.logo-name {
    width: 150px !important;
    height: 22px !important;
    margin: 0 auto;
    display: flex;
  }
`;

const BackgroundImg = styled.div`
  background-image: url('	https://www.crm-stage.sharebucks.io/static/media/bg.aa3243d2.jpg');
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

Backdrop.defaultProps = {
  body: null,
};

Backdrop.propTypes = {
  body: node,
};
