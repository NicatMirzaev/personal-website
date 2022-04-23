import Head from 'next/head';
import '../styles/globals.css'
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{width: "100%", height: "100%"}}>
      <Head>
        <title>Personal Website - Nicat Mirzoev</title>
        <meta name="description" content="Nicat Mirzoev Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;
