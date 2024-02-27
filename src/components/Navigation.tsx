export default function Navigation() {
  return (
    <nav className='fixed top-0 left-0 z-10 flex items-center justify-center w-full px-4 text-xl text-white bg-black h-25'>
      <ul className='flex flex-wrap list-none md:gap-10'>
        <li className='w-full md:w-auto'>
          <a href='/' className='hover:underline'>
            Collection
          </a>
        </li>
        <li className='w-full md:w-auto'>
          <a href='/manifesto' className='hover:underline'>
            Manifesto
          </a>
        </li>
        <li className='w-full md:w-auto'>
          <a href='/treasury' className='hover:underline'>
            Treasury
          </a>
        </li>
        <li className='w-full md:w-auto'>
          <a
            href='https://twitter.com/IBC_Gangsters'
            target='_blank'
            rel='noreferrer'
            className='hover:underline'
          >
            IBCG on X
          </a>
        </li>
      </ul>
    </nav>
  )
}
