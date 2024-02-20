import Footer from 'components/Footer'
import Navigation from 'components/Navigation'
import PageMetadata from 'components/PageMetadata'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageMetadata />
      <Navigation />
      <main className='flex h-full'>{children}</main>
      <Footer />
    </>
  )
}
