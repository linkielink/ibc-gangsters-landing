import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className='flex w-full h-25 left-0 top-0 fixed justify-center items-center text-white text-xl bg-black'>
      <ul className='list-none flex gap-10'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/manifesto'>Manifesto</NavLink>
        </li>
      </ul>
    </nav>
  )
}
