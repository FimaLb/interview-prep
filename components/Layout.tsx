import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header />

    {children}

    <Footer />
  </div>
);

export default Layout;
