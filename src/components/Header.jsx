import Navigation from './Navigation'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className='square'>Y</div>
      <h1>Hacker News</h1>
      <Navigation />
    </div>
  )
}

export default Header
