import Footer from 'components/Footer'
import Navigation from 'components/Navigation'
import { metaData } from 'constants/pageMetadata'
import Head from 'next/head'
import './globals.css'

export const metadata = metaData.collection

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className='p-0 m-0 scrollbar-hide' lang='en'>
      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#000000' />
        <meta name='msapplication-TileColor' content='#000000' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <body className='p-0 pb-10 m-0 scrollbar-hide pt-25'>
        <Navigation />
        <main className='flex flex-wrap h-full'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
