import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DarkModeToggle from '../components/DarkModeToggle'
import { useSelector } from 'react-redux'

const Layout = () => {
  const { darkMode } = useSelector((state) => {
    return state.darkMode
  })

  return (
    <div className={`layout ${darkMode ? 'dark' : 'light'}`}>
      <DarkModeToggle />

      <Header />

      <Outlet />

      <Footer />
    </div>
  )
}

export default Layout
