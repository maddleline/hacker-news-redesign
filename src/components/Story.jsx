import { useEffect, useState, memo } from 'react'
import { getStory } from '../services/hackerNewsApi'
import { timeSince } from '../utils/timeSince'
import { useDispatch } from 'react-redux'
import { addStarredStory, removeStarredStory } from '../store/'

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
      {index + 1}
      {'.   '}
      <a href={story.url}>{story.title}</a>
      <p>by {story.by}</p>
      <p>posted {timeSince(story.time)} ago</p>
      <button onClick={() => handleStarredStoryAdd(storyId)}>Add</button>
      <button onClick={() => handleStarredStoryRemove(storyId)}>Remove</button>
    </>
  ) : null
})
