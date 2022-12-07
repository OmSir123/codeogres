import "../styles/globals.css";

import Footer from "./component/footer";
import Navbar from "./component/navbar";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color='#f11946' height={2} />
      <Navbar />

      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
