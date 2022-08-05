// import App from 'next/app'
import Layout from "../components/Layout";
import { GlobalProvider } from "../context/GlobalContext";
import { CartProvider } from "../context/CartContext";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/aos/dist/aos.css";
import '../../node_modules/react-day-picker/dist/style.css';

import "../assets/fonts/icon-font/css/style.css";
import "../assets/fonts/typography-font/typo.css";
import "../assets/fonts/fontawesome-5/css/all.css";

import "../scss/bootstrap.scss";
import "../scss/main.scss";

const MyApp = ({ Component, pageProps, router }) => {
  if (router.pathname.match(/sign|reset|coming/)) {
    return (
      <GlobalProvider>
        <CartProvider>
          <Layout pageContext={{ layout: "bare" }}>
            <Component {...pageProps} />
          </Layout>
        </CartProvider>
      </GlobalProvider>
    );
  }

  return (
    <GlobalProvider>
      <CartProvider>
        <Layout pageContext={{}}>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </GlobalProvider>
  );
};

export default MyApp;
