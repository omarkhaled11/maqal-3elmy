import App from 'next/app';
import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import initContentfulService from '../service/contentful';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    const client = initContentfulService();
    const disciplines = await client.getDisciplines();

    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
      disciplines,
    };
  }

  render() {
    const { Component, pageProps, disciplines = {} } = this.props;

    return (
      <>
        <Header disciplines={disciplines} />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  }
}
