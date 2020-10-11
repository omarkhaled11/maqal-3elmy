import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0px;
    border: 0px;
    margin: 0px;
    direction: rtl;
    @font-face {
      font-family: 'Dubai-Regular';
      src: url('/fonts/Dubai-Regular.ttf');
    }
    @font-face {
      font-family: 'Dubai-Bold';
      src: url('/fonts/Dubai-Bold.ttf');
    }
    font-family: 'Dubai-Regular';
  }
`;

export const theme = {
  colors: {
    primary: '#464646',
    secondary: '#464F4F',
    themeRed: '#E94B3C',
    text: 'black',
    border: '#eee',
    background: 'white',
  },
  metrics: {
    m1: '0.5rem',
    m2: '1rem',
    m3: '2rem',
    m4: '3rem',
    m5: '4rem',
    m6: '5rem',
    baseMargin: '2.5rem',
    smallMargin: '1.5rem',
    navbarHeight: '80px',
    sideMargin: '6rem',
  },
  fonts: {
    h1: '4rem',
    h2: '3.5rem',
    h3: '3rem',
    h4: '2.5rem',
    large: '1.5rem',
    medium: '1.25rem',
    small: '1rem',
    bold: 'Tajawal-Bold',
  },
  dimensions: {
    imageWidth: '15rem',
    imageHeight: '15rem',
  }
};
