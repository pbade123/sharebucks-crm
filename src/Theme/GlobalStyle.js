import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Lato:wght@300;400;700&display=swap');
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.ghostWhite};
    font-family: 'Lato', sans-serif;
    letter-spacing: 0px;
  }

  h1{
    font-size:3em;
    line-height:1.2; 
  }

  h2{
    font-size:2em;
    margin-bottom:0.75em;
  }

  h3{
    font-size:1.5em;
    line-height:1;
    margin-bottom:1em
  }

  h4{
    font-size:1.2em;
    line-height:1.2;
    /* margin-bottom:1.25em; */
  }

  h5{
    font-size:1em;
    margin-bottom:1.5em;
  }

  h6{
    font-size:1em;
  }
  
  p{
    line-height:1.5;
    margin:0 0 1.5rem 0;
  }

`;

export default GlobalStyle;
