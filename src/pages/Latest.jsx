import { useEffect, useState } from 'react'
import { getStoryIds } from '../services/hackerNewsApi'
import StoriesContainer from '../containers/StoriesContainer'

const Latest = () => {
  const [storyIds, setStoryIds] = useState([])
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    getStoryIds().then((res) => setStoryIds(res))
  }, [pageNumber])

  return (
    <div className='Latest'>
      <StoriesContainer
        storyIds={storyIds}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  )
}

export default Latest
