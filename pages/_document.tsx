import { Html, Head, Main, NextScript } from 'next/document'
import Header from '@/components/navigation/header/header'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta name="description" content="Je suis Arthur Guilet, un freelance en Admin Système et réseau, et en développement." />
        <meta name="keywords" content="freelance, admin, système, réseau, développement, web, mobile, arthur, guilet, arthur guilet" />
        <meta name="author" content="Arthur Guilet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
