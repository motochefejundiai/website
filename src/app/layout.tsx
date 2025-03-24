import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import { appMetadata } from '@/constants/about'
import './globals.css'
import Header from './_components/header'
import Script from 'next/script'
import { socialMedia } from '@/constants/links'

const oswaldSans = Oswald({
  variable: '--font-oswald-sans',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  ...appMetadata,
  keywords: [
    'scoters elétricas',
    'MotoChefe Jundiaí',
    'motos elétricas',
    'bicicletas elétricas'
  ],
  alternates: {
    canonical: appMetadata.url
  },
  openGraph: {
    type: 'website',
    url: appMetadata.url,
    title: appMetadata.title,
    description: appMetadata.description,
    images: [
      {
        url: `${appMetadata.url}/capa.png`,
        width: 960,
        height: 1280,
        alt: 'Capa do site MotoChefe Jundiaí'
      },
      {
        url: `${appMetadata.url}/capa.png`,
        width: 1200,
        height: 630,
        alt: 'Capa do site MotoChefe Jundiaí'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@your_twitter_handle',
    title: appMetadata.title,
    description: appMetadata.description,
    images: [`${appMetadata.url}/capa.png`]
  },
  robots: 'index, follow'
}

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://wbot.chat" />
        <link rel="dns-prefetch" href="https://wbot.chat" />
        <meta property="og:logo" content="/favicon.ico" />
        <Script
          src="https://wbot.chat/index.js"
          strategy="lazyOnload"
          data-token="2ed2cee1abab5d70ca87b06be90bf53c"
        />
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NK59FP42');`
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${oswaldSans.variable} antialiased relative`}>
        <Header />
        {children}
        <Script id="seo-script" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'MotoChefe Jundiaí',
            url: appMetadata.url,
            logo: `${appMetadata.url}/logos/logo-black.png`,
            sameAs: [
              socialMedia.facebook.link,
              socialMedia.instagram.link,
              socialMedia.whatsapp.link
            ]
          })}
        </Script>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NK59FP42"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
      </body>
    </html>
  )
}
