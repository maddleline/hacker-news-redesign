import { useEffect, useState } from 'react';
import { getStoryIds, getStory } from '../services/hackerNewsApi';
import { Story } from '../components/Story';

const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(res => setStoryIds(res));
    getStory(33661279).then(res => res); // not used
  }, []);

  return (
    <div className="StoriesContainer">
        {storyIds.map((id) => <Story key={id} storyId={id} />)}
    </div>
  );
}

export default StoriesContainer;