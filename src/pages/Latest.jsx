import { useEffect, useState } from 'react'
import { STORY_PAGE_SIZE } from '../constants'
import { getStoryIds } from '../services/hackerNewsApi'
import ShowMoreButton from '../components/ShowMoreButton'
import StoriesContainer from '../containers/StoriesContainer'

const Latest = () => {
  const [storyIds, setStoryIds] = useState(new Array(500).fill(''))
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    getStoryIds().then((res) => setStoryIds(res))
  }, [])

  return (
    <div className='Latest'>
      <StoriesContainer
        storyIds={storyIds}
        numStories={pageNumber * STORY_PAGE_SIZE}
      />
      <ShowMoreButton
        incrementPageNumber={() => setPageNumber(pageNumber + 1)}
      />
    </div>
  )
}

export default Latest
