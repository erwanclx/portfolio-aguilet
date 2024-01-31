import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Preloader from '@/components/navigation/preloader'
import Header from '@/components/navigation/header/header'
import Footer from '@/components/navigation/footer/footer'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <div>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}
