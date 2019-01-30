import React from "react";
import App, { Container } from "next/app";
import NProgress from "nprogress";
import Router from "next/router";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import style from "../config/style";

// >>> Update progress bar on router events
Router.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// >>> Global styles
const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    height: 100%;
}

  body {
    color: ${style.color.dark};
    font-family: ${style.font.family.primary};
  }
`;

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={style}>
        <Container>
          <GlobalStyle />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }
}
