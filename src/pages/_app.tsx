import { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import 'styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const PageComponent = Component as any
  const [isServer, setIsServer] = useState(true)

  useEffect(() => {
    setIsServer(false)
  }, [])
  if (isServer) return null

  return <PageComponent {...pageProps} />
}
