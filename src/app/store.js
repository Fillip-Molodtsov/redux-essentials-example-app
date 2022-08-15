import { configureStore } from '@reduxjs/toolkit'
import postReducers from './features/posts/postSlice'
import userReducers from './features/users/userSlice'
import notificationReducers from "./features/notifications/notificationsSlice";

export default configureStore({
  reducer: {
    posts: postReducers,
    users: userReducers,
    notifications: notificationReducers,
  }
})
