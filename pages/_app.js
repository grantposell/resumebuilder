import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-T282LWR' });
}, []);
  return <Component {...pageProps} />
  
}

export default MyApp
