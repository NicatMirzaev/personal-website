import { useState } from "react";
import Head from 'next/head';
import Navbar from '../components/Navbar';
import "../styles/styles.css";

function MyApp({ Component, pageProps }) {
  const [language, setLanguage] = useState(0);

  return (
    <div className="container">
      <Head>
        <title>Personal Website - Nicat Mirzoev</title>
        <meta name="description" content="Nicat Mirzoev Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar language={language} setLanguage={(lang) => setLanguage(lang)} />
      <Component language={language} {...pageProps} />
    </div>
  )
}

export default MyApp;
