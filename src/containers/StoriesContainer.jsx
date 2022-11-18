import { useEffect, useState } from 'react'
import { getStoryIds } from '../services/hackerNewsApi'
import { Story } from '../components/Story'
import { STORY_PAGE_SIZE } from '../constants'

const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([])
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    getStoryIds().then((res) => setStoryIds(res))
  }, [pageNumber])

  return (
    <div className='StoriesContainer'>
      {storyIds.slice(0, pageNumber * STORY_PAGE_SIZE).map((id, index) => (
        <Story key={id} storyId={id} index={index} />
      ))}
      <button onClick={() => setPageNumber(pageNumber + 1)}>show more</button>
    </div>
  )
}

export default StoriesContainer
