import { useEffect, useState } from 'react'
import { getStoryIds } from '../services/hackerNewsApi'
import { Story } from '../components/Story'
import { STORY_PAGE_SIZE } from '../constants'

const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([])

  useEffect(() => {
    getStoryIds().then((res) => setStoryIds(res))
  }, [])

  return (
    <div className='StoriesContainer'>
      {storyIds.slice(0, STORY_PAGE_SIZE).map((id, index) => (
        <Story key={id} storyId={id} index={index} />
      ))}
    </div>
  )
}

export default StoriesContainer
