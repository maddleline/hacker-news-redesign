import { useEffect, useState } from 'react'
import { getStory } from '../services/hackerNewsApi'
import { timeSince } from '../utils/timeSince'

export const Story = ({ storyId }) => {
  const [story, setStory] = useState('')

  useEffect(() => {
    getStory(storyId).then((res) => res && res.url && setStory(res))
  }, [])

  return story && story.url ? (
    <>
      <a href={story.url}>{story.title}</a>
      <p>by {story.by}</p>
      <p>posted {timeSince(story.time)} ago</p>
    </>
  ) : null
}
