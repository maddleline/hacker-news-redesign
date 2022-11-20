import { NavLink } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <h2 className='my-footer-header'>Hacker News</h2>
      <nav className='my-nav'>
        <NavLink to='/'>latest</NavLink>
        {` | `}
        <NavLink to='/saved'>saved</NavLink>
      </nav>
    </div>
  )
}

export default Footer
