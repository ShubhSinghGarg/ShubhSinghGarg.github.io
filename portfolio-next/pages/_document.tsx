import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-176168317-1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-176168317-1');
            `,
          }}
        />
        
        {/* Fonts */}
        <link 
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" 
          rel="stylesheet"
        />
        
        {/* Original CSS files */}
        <link rel="stylesheet" href="/css/hero-slider.css" />
        <link rel="stylesheet" href="/css/owl-carousel.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/templatemo-main.css" />
        
        {/* Modernizr */}
        <script src="/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js" />
        
        {/* Font Awesome */}
        <script 
          src="https://kit.fontawesome.com/1ad9f2774b.js" 
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
