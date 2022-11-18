import { useEffect, useState } from 'react'
import { getStory } from '../services/hackerNewsApi'
import { timeSince } from '../utils/timeSince'

export const Story = ({ storyId, index }) => {
  const [story, setStory] = useState('')

  useEffect(() => {
    getStory(storyId).then((res) => res && setStory(res))
  }, [])

  return story ? (
    <>
      {index + 1}
      {'.   '}
      <a href={story.url}>{story.title}</a>
      <p>by {story.by}</p>
      <p>posted {timeSince(story.time)} ago</p>
    </>
  ) : null
}
