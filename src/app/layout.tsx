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
        url: `${appMetadata.url}/capa.jpeg`,
        width: 960,
        height: 1280,
        alt: 'Capa do site MotoChefe Jundiaí'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@your_twitter_handle',
    title: appMetadata.title,
    description: appMetadata.description,
    images: [`${appMetadata.url}/capa.jpg`]
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
        <Script
          src="https://wbot.chat/index.js"
          strategy="lazyOnload"
          data-token="2ed2cee1abab5d70ca87b06be90bf53c"
        />
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
      </body>
    </html>
  )
}
