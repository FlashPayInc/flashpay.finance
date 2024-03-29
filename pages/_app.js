import Head from "next/head";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* <!-- Primary Meta Tags --> */}
        <title>FlashPay — Accept crypto payments in Algorand assets</title>
        <meta
          name="title"
          content="FlashPay — Accept crypto payments in Algorand assets"
        />
        <meta
          name="description"
          content="FlashPay is a payments infrastructure built on Algorand that allows merchants and business owners to receive direct payments in Algorand-based assets."
        />

        <link rel="shortcut icon" href="/fav.svg" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://flashpay.finance/" />
        <meta
          property="og:title"
          content="FlashPay — Accept crypto payments in Algorand assets"
        />
        <meta
          property="og:description"
          content="FlashPay is a payments infrastructure built on Algorand that allows merchants and business owners to receive direct payments in Algorand-based assets."
        />
        <meta property="og:image" content="" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://flashpay.finance/" />
        <meta
          property="twitter:title"
          content="FlashPay — Accept crypto payments in Algorand assets"
        />
        <meta
          property="twitter:description"
          content="FlashPay is a payments infrastructure built on Algorand that allows merchants and business owners to receive direct payments in Algorand-based assets."
        />
        <meta property="twitter:image" content=""></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
