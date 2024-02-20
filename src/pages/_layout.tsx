import Footer from 'components/Footer'
import Hero from 'components/Hero'
import Navigation from 'components/Navigation'
import PageMetadata from 'components/PageMetadata'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageMetadata />
      <Navigation />
      <main className='flex flex-wrap h-full'>
        <Hero />
        {children}
      </main>
      <Footer />
    </>
  )
}
