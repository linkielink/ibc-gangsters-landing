import Manifesto from 'components/Manifesto'
import PAGE_METADATA from 'constants/pageMetadata'
import Head from 'next/head'

export default function ManifestoPage() {
  const metadata = PAGE_METADATA.manifesto
  return (
    <>
      <Head>
        <title key='title'>{metadata.title}</title>
        <meta name='description' content={metadata.description} key='description' />
        <meta name='keywords' content={metadata.keywords} key='keywords' />
        <meta property='og:url' content='https://ibcgangsters.io/manifesto' key='og:url' />
        <meta property='og:title' content={metadata.title} key='og:title' />
        <meta property='og:description' content={metadata.description} key='og:description' />
        <meta property='og:site_name' content={metadata.title} key='og:site_name' />
        <meta name='twitter:title' content={metadata.title} key='twitter:title' />
        <meta name='twitter:description' content={metadata.description} key='twitter:description' />
      </Head>
      <Manifesto />
    </>
  )
}
