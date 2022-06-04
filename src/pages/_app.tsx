import type { AppProps } from 'next/app'
import '../ui/styles/globals.css'
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
