import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from '../store'
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
    <>
      {darkMode ? (
        <div onClick={handleToggleDarkMode} className='toggle sun'>
          &#9728;
        </div>
      ) : (
        <div onClick={handleToggleDarkMode} className='toggle moon'>
          &#9790;
        </div>
      )}
    </>
  )
}

export default DarkModeToggle
