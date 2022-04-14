import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Script from "next/script";
config.autoAddCss = false

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-N0R7RS7CQ4`}
      />

      <Script id="my-script"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N0R7RS7CQ4', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
