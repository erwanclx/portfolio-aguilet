import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Preloader from '@/components/navigation/preloader'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Preloader />
      <div>
        <Component {...pageProps} />
      </div>
    </>
  )
}
