import { useEffect, useState, memo } from 'react'
import { getStory } from '../services/hackerNewsApi'
import { timeSince } from '../utils/timeSince'
import { useDispatch, useSelector } from 'react-redux'
import { addStarredStory, removeStarredStory } from '../store/'
import './Story.css'

export const Story = memo(({ storyId, index }) => {
  const [story, setStory] = useState('')

  const dispatch = useDispatch()

  const starredStories = useSelector((state) => {
    return state.starredStories
  })

  const handleStarClick = () => {
    if (starredStories.includes(storyId)) {
      handleStarredStoryRemove(storyId)
    } else {
      handleStarredStoryAdd(storyId)
    }
  }

  const handleStarredStoryAdd = (starredStory) => {
    dispatch(addStarredStory(starredStory))
  }

  const handleStarredStoryRemove = (starredStory) => {
    dispatch(removeStarredStory(starredStory))
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

  const getStarText = () => {
    return starredStories.includes(storyId) ? 'starred' : 'star'
  }

  return story ? (
    <div className='article'>
      <a href={story.url} target='_blank' rel='noopener noreferrer'>
        <span className='article__number'>{index + 1}.</span>
        <div className='article__title'>{story.title}</div>
        {story.url && <span className='article__source'>({getDomain()})</span>}
      </a>
      <div className='article__metadata'>
        <p>
          {`284 points by ${story.by} posted ${timeSince(
            story.time
          )} ago | ${getCommentString()} | `}
          <span className='article__star' onClick={() => handleStarClick()}>
            <div class='five-pointed-star' />
            {getStarText()}
          </span>
        </p>
      </div>
    </div>
  ) : null
})
