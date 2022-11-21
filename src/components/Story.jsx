import { useEffect, useState, memo } from 'react'
import { getStory } from '../services/hackerNewsApi'
import { timeSince } from '../utils/timeSince'
import { useDispatch, useSelector } from 'react-redux'
import { addSavedStory, removeSavedStory } from '../store/'
import starActive from '../icons/star--active.svg'
import starInactive from '../icons/star--inactive.svg'
import starInactiveDark from '../icons/star--inactive--dark.svg'
import './Story.scss'

export const Story = memo(({ storyId, index }) => {
  const [story, setStory] = useState('')

  const dispatch = useDispatch()

  const savedStories = useSelector((state) => {
    return state.savedStories
  })

  const { darkMode } = useSelector((state) => {
    return state.darkMode
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

  const getStarIcon = () => {
    return savedStories.includes(storyId) ? (
      <img src={starActive} alt='active star' />
    ) : darkMode ? (
      <img src={starInactiveDark} alt='inactive star' />
    ) : (
      <img src={starInactive} alt='inactive star' />
    )
  }

  return story ? (
    <div className='article'>
      <a
        className='article__link'
        href={story.url}
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='article__number'>{index + 1}.</div>
        <div className='article__title'>{story.title}</div>
        {story.url && <div className='article__source'>({getDomain()})</div>}
      </a>
      <div className='article__metadata'>
        <span>
          {`${getPointsText()} by ${story.by} posted ${timeSince(
            story.time
          )} ago
        | ${getCommentString()} | `}
        </span>
        <div
          className={`article__save ${getSaveText()}`}
          onClick={() => handleSaveClick()}
        >
          {getStarIcon()}
          <span>{getSaveText()}</span>
        </div>
      </div>
    </div>
  ) : null
})
