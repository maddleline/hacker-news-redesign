import { useSelector } from 'react-redux'
import { Story } from '../components/Story'

const SavedStoriesContainer = () => {
  const savedStories = useSelector((state) => {
    return state.savedStories
  })

  return (
    <div className='SavedStoriesContainer'>
      {savedStories.map((id, index) => (
        <Story key={id} storyId={id} index={index} />
      ))}
    </div>
  )
}

export default SavedStoriesContainer
