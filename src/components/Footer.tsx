export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className='flex w-full h-10 left-0 bottom-0 fixed justify-center items-center text-white bg-black'>
      Copyright &copy; {year} - IBC Gangsters
    </footer>
  )
}
