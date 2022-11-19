import { useSelector } from 'react-redux'
import { Story } from '../components/Story'

const StarredStoriesContainer = () => {
  const starredStories = useSelector((state) => {
    return state.starredStories
  })

  return (
    <div className='StarredStoriesContainer'>
      {starredStories.map((id, index) => (
        <Story key={id} storyId={id} index={index} />
      ))}
    </div>
  )
}

export default StarredStoriesContainer
