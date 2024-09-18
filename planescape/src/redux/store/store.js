import {configureStore} from '@reduxjs/toolkit'
import themeSlice from '../slices/themeSlice'
import userIdSlice from '../slices/userIdSlice'

const store = configureStore({
  reducer: {
    theme: themeSlice,
    userId: userIdSlice
  }
})

export default store