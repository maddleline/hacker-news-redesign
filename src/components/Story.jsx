import { useEffect, useState, memo } from 'react'
import { getStory } from '../services/hackerNewsApi'
import { timeSince } from '../utils/timeSince'
import { useDispatch, useSelector } from 'react-redux'
import { addSavedStory, removeSavedStory } from '../store/'
import './Story.scss'

export const Story = memo(({ storyId, index }) => {
  const [story, setStory] = useState('')

  const dispatch = useDispatch()

  const savedStories = useSelector((state) => {
    return state.savedStories
  })

  const handleSaveClick = () => {
    if (savedStories.includes(storyId)) {
      handleSavedStoryRemove(storyId)
    } else {
      handleSavedStoryAdd(storyId)
    }
  }

  const handleSavedStoryAdd = (savedStory) => {
    dispatch(addSavedStory(savedStory))
  }

  const handleSavedStoryRemove = (savedStory) => {
    dispatch(removeSavedStory(savedStory))
  }

  useEffect(() => {
    getStory(storyId).then((res) => res && setStory(res))
  }, [storyId])

  const getDomain = () => {
    const domain = new URL(story.url)
    return domain.hostname.replace('www.', '')
  }

  const getCommentString = () => {
    const comments = story.kids ?? []
    return comments.length === 1 ? '1 comment' : `${comments.length} comments`
  }

  const getPointsText = () => {
    const points = story.score ?? 0
    return points === 1 ? '1 point' : `${story.points} points`
  }

  const getSaveText = () => {
    return savedStories.includes(storyId) ? 'saved' : 'save'
  }

  return story ? (
    <div className='article'>
      <a
        className='article__link'
        href={story.url}
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='article__number my-number'>{index + 1}.</div>
        <div className='article__title my-title'>{story.title}</div>
        {story.url && (
          <div className='article__source my-metadata'>({getDomain()})</div>
        )}
      </a>
      <div className='article__metadata my-metadata'>
        {`${getPointsText()} by ${story.by} posted ${timeSince(story.time)} ago
        | ${getCommentString()} | `}
        <div
          className={`article__save ${getSaveText()}`}
          onClick={() => handleSaveClick()}
        >
          <span>☆</span>
          {getSaveText()}
        </div>
      </div>
    </div>
  ) : null
})
