import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <h1>Hacker News</h1>
      <nav>
        <NavLink to='/'>latest</NavLink>
        {` | `}
        <NavLink to='/saved'>saved</NavLink>
      </nav>
    </div>
  )
}

export default Header
