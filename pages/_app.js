import React, { Fragment } from "react";
import App, { Container } from "next/app";
import NProgress from "nprogress";
import Router from "next/router";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import style from "../config/style";
import styleMobile from "../config/styleMobile";
import MediaQuery from "react-responsive";

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
    font-size: 1rem;

    ${"" /* @media (max-width: 45rem) {
      font-size: 0.9375rem;
    } */}
  }
`;

// >>> For mobile devices

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

    // style.size.base = "1em";
    // style.size.xl = "2.67em";
    // style.size.l = "1.33em";
    // style.size.m = "0.67em";
    // style.size.s = "0.33em";
    // style.size.xs = "0.17em";

    return (
      <Fragment>
        <MediaQuery maxWidth="45em">
          {matches =>
            matches ? (
              <ThemeProvider theme={styleMobile}>
                <Container>
                  <GlobalStyle />
                  <Component {...pageProps} />
                </Container>
              </ThemeProvider>
            ) : (
              <ThemeProvider theme={style}>
                <Container>
                  <GlobalStyle />
                  <Component {...pageProps} />
                </Container>
              </ThemeProvider>
            )
          }
        </MediaQuery>
      </Fragment>
    );
  }
}
