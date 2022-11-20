import { Story } from '../components/Story'

const StoriesContainer = ({ storyIds, numStories }) => {
  return (
    <div className='StoriesContainer'>
      {storyIds.slice(0, numStories).map((id, index) => (
        <Story key={id} storyId={id} index={index} />
      ))}
    </div>
  )
}

export default StoriesContainer
