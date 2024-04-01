import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/logo.jpg" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="açıklama"
            content="Hiç durmadan sunucunuzu korumaya ve güncelleştirmeye devam etmek ister misiniz?"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@CliffStudios" />
          <meta name="twitter:creator" content="@CliffStudios" />
          <meta property="og:url" content="https://cliffstudios.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Cliff Studios" />
          <link
            rel="icon"
            href="/img/logo2.png"
            type="image/x-icon"
          />
          <meta
            property="og:açıklama"
            content="Hiç durmadan sunucunuzu korumaya ve güncelleştirmeye devam etmek ister misiniz?"
          />
          <meta property="og:image" content="/img/logo.jpg" />
          <meta property="og:image:alt" content="Cliff Studios" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="Cliff Studios"
          />
          <meta name="theme-color" content="#087ddd" />
          <link rel="icon" href="/img/logo.jpg" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
