import { useMemo } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

import PAGE_METADATA from 'constants/pageMetadata'

const helmetContext = {}

function PageMetadata() {
  const location = useLocation()
  console.log(location)
  const metadata = useMemo(() => {
    const route = location.pathname.split('/').reverse()[0] as keyof typeof PAGE_METADATA
    return PAGE_METADATA[route] || PAGE_METADATA['main']
  }, [location])

  console.log(metadata, location.pathname.split('/').reverse()[0])

  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>{metadata.title}</title>
        <meta content={metadata.title} property='og:title' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#000000' />
        <meta name='msapplication-TileColor' content='#000000' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:url' content={'https://ibcgangsters.io'} />
        <meta property='og:title' content={metadata.title} />
        <meta property='og:description' content={metadata.description} />
        <meta property='og:image' content='https://ibcgangsters.io/banner.jpg' />
        <meta property='og:site_name' content={(metadata.title as string) ?? ''} />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={metadata.title} />
        <meta name='twitter:description' content={metadata.description} />
        <meta name='twitter:image' content='https://ibcgangsters.io/banner.jpg' />
        <meta name='description' content={metadata.description} property='og:description' />
        <meta name='keywords' content={metadata.keywords} property='og:keywords' />
      </Helmet>
    </HelmetProvider>
  )
}

export default PageMetadata
