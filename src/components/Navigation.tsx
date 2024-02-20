import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className='fixed top-0 left-0 flex items-center justify-center w-full text-xl text-white bg-black h-25'>
      <ul className='flex gap-10 list-none'>
        <li>
          <NavLink to='/'>Collection</NavLink>
        </li>
        <li>
          <NavLink to='/manifesto'>Manifesto</NavLink>
        </li>
      </ul>
    </nav>
  )
}
