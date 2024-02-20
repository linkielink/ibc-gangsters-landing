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
        <meta property='og:url' content='https://ibcgangsters.io/manifesto' />
        <meta property='og:title' content={metadata.title} />
        <meta property='og:description' content={metadata.description} />
        <meta property='og:site_name' content={metadata.title} />
        <meta name='twitter:title' content={metadata.title} />
        <meta name='twitter:description' content={metadata.description} />
        <meta name='description' content={metadata.description} property='og:description' />
        <meta name='keywords' content={metadata.keywords} property='og:keywords' />
      </Head>
      <Manifesto />
    </>
  )
}
