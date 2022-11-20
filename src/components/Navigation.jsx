import { NavLink } from 'react-router-dom'
import './Navigation.scss'

const Navigation = () => {
  return (
    <nav className='my-nav'>
      <NavLink to='/'>latest</NavLink>
      {` | `}
      <NavLink to='/saved'>saved</NavLink>
    </nav>
  )
}

export default Navigation
