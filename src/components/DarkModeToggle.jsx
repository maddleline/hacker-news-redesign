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

  const getIcon = () => {
    return darkMode ? (
      <img
        className='toggle'
        onClick={handleToggleDarkMode}
        src={sun}
        alt='sun icon'
      />
    ) : (
      <img
        className='toggle'
        onClick={handleToggleDarkMode}
        src={moon}
        alt='moon icon'
      />
    )
  }

  return (
    <>
      {getIcon()}
      {/* {darkMode ? (
        <div onClick={handleToggleDarkMode} className='toggle sun'>
          &#9728;
        </div>
      ) : (
        <div onClick={handleToggleDarkMode} className='toggle moon'>
          &#9790;
        </div>
      )} */}
    </>
  )
}

export default DarkModeToggle
