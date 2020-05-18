import React from 'react';
import App from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const colors = {
  primary: '#007FFF',
  textExtraDark: '#3E4466',
  textExtraLight: '#FFF',
}

const theme = {
  backgroundColor: '#FFF',
  colors,
  typography: {
    color: colors.textExtraDark,
    link: {
      color: colors.textExtraDark,
    }
  },
};

const darkTheme = {
  backgroundColor: '#3E4466',
  colors,
  typography: {
    color: colors.textExtraLight,
    link: {
      color: colors.textExtraLight,
    }
  }
};

const CustomGlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: ${props => props.theme.backgroundColor};
    font-family: -apple-system, BlinkMacSystemFont, 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5 {
    color: ${props => props.theme.typography.color};
    font-family: 'Playfair Display', serif;
  }

  p {
    color: ${props => props.theme.typography.color};
    font-size: 18px;
    line-height: 24px;
  }

  * {
    box-sizing: border-box;
    transition:
      color 0.5s,
      background-color 0.5s,
      border-color 0.5s;
  }
`;

export default class extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <CustomGlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}