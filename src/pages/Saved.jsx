import { useState } from 'react'
import StoriesContainer from '../containers/StoriesContainer'
import { useSelector } from 'react-redux'

const Saved = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const savedStories = useSelector((state) => {
    return state.savedStories
  })

  return (
    <div className='Saved'>
      <StoriesContainer
        storyIds={savedStories}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  )
}

export default Saved
