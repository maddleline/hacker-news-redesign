import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from '../store'
import sun from '../icons/sun.svg'
import moon from '../icons/moon.svg'
import './DarkModeToggle.scss'

const DarkModeToggle = () => {
  const dispatch = useDispatch()

  const { darkMode } = useSelector((state) => {
    return state.darkMode
  })

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode(true))
  }

  return (
    <div className='toggle'>
      {darkMode ? (
        <img
          className='toggle__icon'
          onClick={handleToggleDarkMode}
          src={sun}
          alt='sun icon'
        />
      ) : (
        <img
          className='toggle__icon'
          onClick={handleToggleDarkMode}
          src={moon}
          alt='moon icon'
        />
      )}
    </div>
  )
}

export default DarkModeToggle
