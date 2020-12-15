import React, { FC } from 'react';
import Head from 'next/head';
import { Landing } from 'components/Templates/Landing';
import { GlobalStyle } from '../components/particles/GlobalStyle';

const Home: FC = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>saidgeek.land</title>
      </Head>
      <GlobalStyle />
      <Landing />
    </div>
  );
};

export default Home;
