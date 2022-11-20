import { configureStore, createSlice } from '@reduxjs/toolkit'

const savedStoriesSlice = createSlice({
  name: 'savedStory',
  initialState: [],
  reducers: {
    addSavedStory(state, action) {
      state.push(action.payload)
    },
    removeSavedStory(state, action) {
      const index = state.indexOf(action.payload)
      state.splice(index, 1)
    }
  }
})

const store = configureStore({
  reducer: {
    savedStories: savedStoriesSlice.reducer
  }
})

export { store }
export const { addSavedStory, removeSavedStory } = savedStoriesSlice.actions
