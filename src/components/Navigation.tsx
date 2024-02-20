import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className='fixed top-0 left-0 z-10 flex items-center justify-center w-full px-4 text-xl text-white bg-black h-25'>
      <ul className='flex flex-wrap list-none md:gap-10'>
        <li className='w-full md:w-auto'>
          <NavLink to='/' className='hover:underline'>
            Collection
          </NavLink>
        </li>
        <li className='w-full md:w-auto'>
          <NavLink to='/manifesto' className='hover:underline'>
            Manifesto
          </NavLink>
        </li>
        <li className='w-full md:w-auto'>
          <a
            href='https://twitter.com/IBC_Gangsters'
            target='_blank'
            rel='noreferrer'
            className='hover:underline'
          >
            IBC Gangsters on X
          </a>
        </li>
      </ul>
    </nav>
  )
}
