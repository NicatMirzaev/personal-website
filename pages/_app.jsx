import { useState } from "react";
import Head from 'next/head';
import '../styles/globals.css'
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  const [language, setLanguage] = useState(0);

  return (
    <div style={{width: "100%", height: "100%"}}>
      <Head>
        <title>Personal Website - Nicat Mirzoev</title>
        <meta name="description" content="Nicat Mirzoev Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header language={language} setLanguage={(lang) => setLanguage(lang)} />
      <Component language={language} {...pageProps} />
    </div>
  )
}

export default MyApp;
