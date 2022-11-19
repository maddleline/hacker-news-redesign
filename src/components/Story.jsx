import { useEffect, useState, memo } from 'react'
import { getStory } from '../services/hackerNewsApi'
import { timeSince } from '../utils/timeSince'
import { useDispatch } from 'react-redux'
import { addStarredStory, removeStarredStory } from '../store/'
import './Story.css'

export const Story = memo(({ storyId, index }) => {
  const [story, setStory] = useState('')

  const dispatch = useDispatch()

  const handleStarredStoryAdd = (starredStory) => {
    dispatch(addStarredStory(starredStory))
  }

  const handleStarredStoryRemove = (starredStory) => {
    dispatch(removeStarredStory(starredStory))
  }

  useEffect(() => {
    getStory(storyId).then((res) => res && setStory(res))
  }, [storyId])

  return story ? (
    <>
      <div className='article'>
        <span className='article__number'>{index + 1}.</span>
        <a className='article__title' href={story.url}>
          {story.title}
        </a>
      </div>
      <p>by {story.by}</p>
      <p>posted {timeSince(story.time)} ago</p>
      <button onClick={() => handleStarredStoryAdd(storyId)}>Add</button>
      <button onClick={() => handleStarredStoryRemove(storyId)}>Remove</button>
    </>
  ) : null
})
