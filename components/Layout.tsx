import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Blog for learning JavaScript' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="The best blog for learning JavaScript." />
      <link rel="icon" href="/static/favicon.ico" />
    </Head>

    <Header />

    {children}

    <Footer />
  </div>
);

export default Layout;
