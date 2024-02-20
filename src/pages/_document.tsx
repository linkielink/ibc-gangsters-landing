import PageMetadata from 'components/PageMetadata'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='p-0 m-0 scrollbar-hide' lang='en'>
      <Head />
      <body className='p-0 m-0 scrollbar-hide pb-10 pt-25'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
