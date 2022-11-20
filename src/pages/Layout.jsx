import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Latest</Link>
          </li>
          <li>
            <Link to='/saved'>Saved</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout
