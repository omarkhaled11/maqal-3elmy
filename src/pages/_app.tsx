import App from 'next/app';
import React from 'react';
import Router from 'next/router'

import AppLayout from '../components/AppLayout';
import Header from '../components/Header';
import Footer from '../components/Footer';

import initContentfulService from '../service/contentful';
import { SEO } from '../seo';
import * as gtag from '../lib/gtag'

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

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
    const { Component, pageProps, disciplines = {} }: any = this.props;

    return (
      <>
        <SEO />
        <Header disciplines={disciplines} />
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
        <Footer disciplines={disciplines} />
      </>
    );
  }
}
