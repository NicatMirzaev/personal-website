import '../styles/globals.css'
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{width: "100%", height: "100%"}}>
      <Header/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;
