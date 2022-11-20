import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DarkModeToggle from '../components/DarkModeToggle'

const Layout = () => {
  return (
    <div className='layout'>
      <DarkModeToggle />

      <Header />

      <Outlet />

      <Footer />
    </div>
  )
}

export default Layout
