import React from 'react';
import styled from 'styled-components';

function Card() {
  return (
    <StyledCard>
      <img src="https://kreatecube.com/usefull/vendor/29910/gallery/12034.jpg" alt="product" />
      <footer>
        <h4>Product name</h4>
        <p>$15</p>
      </footer>
    </StyledCard>
  );
}

const StyledCard = styled.article`
  width: 90vw;
  max-width: 300px;
  background: ${(props) => props.theme.white};
  border-radius: 0%.25rem;
  img {
    width: 100%;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }
  h4 {
    &::before {
      content: 'Name : ';
      color: ${(props) => props.theme.rustRed};
    }
  }
  h4,
  p {
    text-transform: capitalize;
    color: blueviolet;
  }
  transition: all 0.5s ease-in-out;
  &:hover {
    box-shadow: 0px 3px 3px #222;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

export default Card;
