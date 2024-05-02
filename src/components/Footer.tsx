export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className='fixed bottom-0 left-0 flex items-center justify-center w-full h-10 text-white bg-black'>
      Copyright &copy; {year} - IBCG
    </footer>
  )
}
