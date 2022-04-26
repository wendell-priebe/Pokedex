
import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '../styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <link rel="shortcut icon" href='/favicon.ico' />
        <title>Pokedex</title>
      </Head>
      <Component {...pageProps} />
    </>
    )
  }

export default MyApp
