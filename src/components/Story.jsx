import { useEffect, useState, memo } from 'react'
import { getStory } from '../services/hackerNewsApi'
import { timeSince } from '../utils/timeSince'
import { useDispatch, useSelector } from 'react-redux'
import { addSavedStory, removeSavedStory } from '../store/'
import './Story.css'

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
    let string = '0 comments'

    if (story.kids) {
      if (story.kids.length === 1) {
        string = `1 comment`
      } else {
        string = `${story.kids.length} comments`
      }
    }

    return string
  }

  const getSaveText = () => {
    return savedStories.includes(storyId) ? 'saved' : 'save'
  }

  return story ? (
    <div className='article'>
      <a href={story.url} target='_blank' rel='noopener noreferrer'>
        <div className='article__number'>{index + 1}.</div>
        <div className='article__title'>{story.title}</div>
        {story.url && <div className='article__source'>({getDomain()})</div>}
      </a>
      <div className='article__metadata'>
        {`284 points by ${story.by} posted ${timeSince(
          story.time
        )} ago | ${getCommentString()} | `}
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
