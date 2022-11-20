import { Story } from '../components/Story'
import ShowMoreButton from '../components/ShowMoreButton'
import { STORY_PAGE_SIZE } from '../constants'

const StoriesContainer = ({ storyIds, pageNumber, setPageNumber }) => {
  return (
    <div className='StoriesContainer'>
      {storyIds.slice(0, pageNumber * STORY_PAGE_SIZE).map((id, index) => (
        <Story key={id} storyId={id} index={index} />
      ))}
      <ShowMoreButton incrementPageNumber={() => setPageNumber(pageNumber + 1)}>
        show more
      </ShowMoreButton>
    </div>
  )
}

export default StoriesContainer
