import { configureStore, createSlice } from '@reduxjs/toolkit'

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: { darkMode: false },
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode
    }
  }
})

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
    savedStories: savedStoriesSlice.reducer,
    darkMode: darkModeSlice.reducer
  }
})

console.log(store.getState())

export { store }
export const { addSavedStory, removeSavedStory } = savedStoriesSlice.actions
export const { toggleDarkMode } = darkModeSlice.actions
