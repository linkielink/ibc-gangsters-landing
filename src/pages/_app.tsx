import PAGE_METADATA from 'constants/pageMetadata'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import 'styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const PageComponent = Component as any
  const [isServer, setIsServer] = useState(true)
  const metadata = PAGE_METADATA.collection

  useEffect(() => {
    setIsServer(false)
  }, [])
  if (isServer) return null

  return (
    <>
      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#000000' />
        <meta name='msapplication-TileColor' content='#000000' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:image' content='https://ibcgangsters.io/banner.jpg' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content='https://ibcgangsters.io/banner.jpg' />

        <title key='title'>{metadata.title}</title>
        <meta name='description' content={metadata.description} key='description' />
        <meta name='keywords' content={metadata.keywords} key='keywords' />
        <meta property='og:url' content='https://ibcgangsters.io' key='og:url' />
        <meta property='og:title' content={metadata.title} key='og:title' />
        <meta property='og:description' content={metadata.description} key='og:description' />
        <meta property='og:site_name' content={metadata.title} key='og:site_name' />
        <meta name='twitter:title' content={metadata.title} key='twitter:title' />
        <meta name='twitter:description' content={metadata.description} key='twitter:description' />
      </Head>
      <PageComponent {...pageProps} />
    </>
  )
}
