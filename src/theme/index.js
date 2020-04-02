import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    border: 0px;
    font-family: 'Roboto';
  }
`;

export const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#7ac2ce',
    text: 'white',
    border: '#eee',
  },
  metrics: {
    m1: '0.5rem',
    m2: '1rem',
    m3: '2rem',
    m4: '3rem',
    navbarHeight: '50px',
  },
  fonts: {
    h1: '4rem',
    h2: '3.5rem',
    h3: '3rem',
    h4: '2.5rem',
    large: '1.5rem',
    medium: '1.25rem',
    small: '1rem',
  },
};
