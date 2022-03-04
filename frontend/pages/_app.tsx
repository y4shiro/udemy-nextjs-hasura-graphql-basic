import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { initializeApollo } from '../lib/apolloClient';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const client = initializeApollo();
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
