import { useEffect, useState, memo } from 'react'
import { getStory } from '../services/hackerNewsApi'
import { timeSince } from '../utils/timeSince'
import { useDispatch } from 'react-redux'
import { addSong, removeSong } from '../store/'

export const Story = memo(({ storyId, index }) => {
  const [story, setStory] = useState('')

  const dispatch = useDispatch()

  const handleSongAdd = (song) => {
    dispatch(addSong(song))
  }

  const handleSongRemove = (song) => {
    dispatch(removeSong(song))
  }

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
      <button onClick={() => handleSongAdd(storyId)}>Add</button>
      <button onClick={() => handleSongRemove(storyId)}>Remove</button>
    </>
  ) : null
})
