import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='p-0 m-0 scrollbar-hide' lang='en'>
      <Head />
      <body className='p-0 pb-10 m-0 scrollbar-hide pt-25'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
