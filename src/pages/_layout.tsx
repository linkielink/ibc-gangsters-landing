import Footer from 'components/Footer'
import Hero from 'components/Hero'
import Navigation from 'components/Navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className='flex flex-wrap h-full'>
        <Hero />
        {children}
      </main>
      <Footer />
    </>
  )
}
