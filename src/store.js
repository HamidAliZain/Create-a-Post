import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../src/Components/reducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})