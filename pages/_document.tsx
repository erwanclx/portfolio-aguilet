import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/navigation/header/header";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta
          name="description"
          content="Je suis Arthur Guilet, un freelance en Admin Système et réseau, et en développement."
        />
        <meta
          name="keywords"
          content="freelance, admin, système, réseau, développement, web, mobile, arthur, guilet, arthur guilet, achères, informatique, prestataire, service"
        />
        <meta name="author" content="Arthur Guilet" />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://arthurguilet.fr" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta property="og:title" content="Arthur Guilet - Freelance" />
        <meta property="og:site_name" content="Arthur Guilet - Freelance" />
        <meta property="og:url" content="https://arthurguilet.fr" />
        <meta
          property="og:description"
          content="Je suis Arthur Guilet, un freelance en Admin Système et réseau, et en développement."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ArthurGuilet" />
        <meta name="twitter:creator" content="@ArthurGuilet" />
        <meta name="twitter:title" content="Arthur Guilet - Freelance" />
        <meta
          name="twitter:description"
          content="Je suis Arthur Guilet, un freelance en Admin Système et réseau, et en développement."
        />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:image:alt" content="Arthur Guilet - Freelance" />
        <meta name="twitter:domain" content="arthurguilet.fr" />
        <meta name="twitter:label1" content="Freelance" />
        <meta name="twitter:data1" content="Arthur Guilet" />
        <meta name="twitter:label2" content="Website" />
        <meta name="twitter:data2" content="arthurguilet.fr" />
        <meta name="twitter:label3" content="Developer" />
        <meta name="twitter:data3" content="Arthur Guilet" />
        <meta name="twitter:label4" content="Location" />
        <meta name="twitter:data4" content="Achères, France" />
        <meta name="twitter:label5" content="Email" />
        <meta name="twitter:data5" content="contact@arthur-guilet.fr" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-TileImage" content="/logo.png" />
        <meta name="application-name" content="Arthur Guilet - Freelance" />
        <meta
          name="apple-mobile-web-app-title"
          content="Arthur Guilet - Freelance"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#3b82f6" />

        {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
        <title>Arthur Guilet - Freelance</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
