import { configureStore } from '@reduxjs/toolkit'
import postReducers from './features/posts/postSlice'
import userReducers from './features/users/userSlice'

export default configureStore({
  reducer: {
    posts: postReducers,
    users: userReducers,
  }
})
