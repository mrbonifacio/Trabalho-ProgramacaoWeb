import '../../styles/globals.css'
import Head from 'next/head'
import Header from '../../components/Header'


import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
      <Head>
        <title>Batman</title>
      </Head>
      <Header />
        <Component {...pageProps} />
      </>
    ) 
    
}
