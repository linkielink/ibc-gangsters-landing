import Manifesto from 'components/Manifesto'
import PAGE_METADATA from 'constants/pageMetadata'
import Head from 'next/head'

export default function ManifestoPage() {
  const metadata = PAGE_METADATA.manifesto
  return (
    <>
      <Head>
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
        <meta property='og:url' content={'https://ibcgangsters.io/manifesto'} />
        <meta property='og:title' content={metadata.title} />
        <meta property='og:description' content={metadata.description} />
        <meta property='og:image' content='https://ibcgangsters.io/banner.jpg' />
        <meta property='og:site_name' content={metadata.title} />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={metadata.title} />
        <meta name='twitter:description' content={metadata.description} />
        <meta name='twitter:image' content='https://ibcgangsters.io/banner.jpg' />
        <meta name='description' content={metadata.description} property='og:description' />
        <meta name='keywords' content={metadata.keywords} property='og:keywords' />
      </Head>
      <Manifesto />
    </>
  )
}
