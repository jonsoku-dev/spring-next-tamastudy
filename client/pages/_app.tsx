import { AppProps } from 'next/app';
import React, { FC } from 'react';
import { SWRConfig } from 'swr';

import { wrapper } from '../state';
import fetcher from '../utils/fetcher';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <SWRConfig
    value={{
      fetcher
    }}>
    <Component {...pageProps} />
  </SWRConfig>
);

export default wrapper.withRedux(App);
