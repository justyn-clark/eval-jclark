import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%; 
    margin: 0;
    padding: 0;  
  }
  
  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
    line-height: 1.5;
  }

  body {
    font-family: 'Roboto', Arial, sans-serif;
  }
  
  body.fontLoaded {
    font-family: 'Roboto', Arial, sans-serif;
  }
  
  .listCol {
    width: 45%
  }
  
   .red {
    color: red
  }
  
  img {
    border: 0;
    max-width: 100%;
  }
  
  p, label {  
    line-height: 1.5em;
  },      
`;

export default GlobalStyle;
