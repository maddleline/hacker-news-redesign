import StoriesContainer from '../containers/StoriesContainer'
import { useSelector } from 'react-redux'

const Saved = () => {
  const savedStories = useSelector((state) => {
    return state.savedStories
  })

  return (
    <div className='Saved'>
      <StoriesContainer
        storyIds={savedStories}
        numStories={savedStories.length}
      />
    </div>
  )
}

export default Saved
