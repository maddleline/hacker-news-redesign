import { useSelector } from 'react-redux'
import { Story } from '../components/Story'

const StarredStoriesContainer = () => {
  const songPlaylist = useSelector((state) => {
    return state.songs
  })

  return (
    <div className='StarredStoriesContainer'>
      {songPlaylist.map((id, index) => (
        <Story key={id} storyId={id} index={index} />
      ))}
    </div>
  )
}

export default StarredStoriesContainer
