import { configureStore, createSlice } from '@reduxjs/toolkit'

const starredStoriesSlice = createSlice({
  name: 'starredStory',
  initialState: [],
  reducers: {
    addStarredStory(state, action) {
      state.push(action.payload)
    },
    removeStarredStory(state, action) {
      const index = state.indexOf(action.payload)
      state.splice(index, 1)
    }
  }
})

const store = configureStore({
  reducer: {
    starredStories: starredStoriesSlice.reducer
  }
})

export { store }
export const { addStarredStory, removeStarredStory } =
  starredStoriesSlice.actions
