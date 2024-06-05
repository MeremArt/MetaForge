import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";

import WalletContextProvider from "../contexts/WalletContextProvider";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>METAFORGE</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔨</text></svg>"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist&display=swap"
          rel="stylesheet"
        />

        <meta property="og:url" content="metaforgeprotocol.xyz" />
        <meta
          property="og:title"
          content="Metaforge protocol - ISSUE. MINT. SHARE. REDEEM"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1717007967/WhatsApp_Image_2024-05-29_at_19.38.39_xftkf9.jpg"
        />
      </Head>
      <WalletContextProvider>
        <Navbar />
        <ToastContainer />

        <Component {...pageProps} />
        <Footer />
      </WalletContextProvider>
    </>
  );
}

export default MyApp;
