import {configureStore} from '@reduxjs/toolkit'
import themeSlice from '../slices/themeSlice'
import userIdSlice from '../slices/userSlice'

const store = configureStore({
  reducer: {
    theme: themeSlice,
    user: userIdSlice
  }
})

export default store