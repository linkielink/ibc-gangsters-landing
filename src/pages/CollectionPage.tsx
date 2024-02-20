import Collection from 'components/Collection'
import PAGE_METADATA from 'constants/pageMetadata'
import Head from 'next/head'

export default function CollectionPage() {
  const metadata = PAGE_METADATA.collection

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta content={metadata.title} property='og:title' />
        <meta property='og:url' content='https://ibcgangsters.io' />
        <meta property='og:title' content={metadata.title} />
        <meta property='og:description' content={metadata.description} />
        <meta property='og:site_name' content={metadata.title} />
        <meta name='twitter:title' content={metadata.title} />
        <meta name='twitter:description' content={metadata.description} />
        <meta name='description' content={metadata.description} property='og:description' />
        <meta name='keywords' content={metadata.keywords} property='og:keywords' />
      </Head>
      <Collection />
    </>
  )
}
