import { configureStore } from '@reduxjs/toolkit'
import postReducers from './features/posts/postSlice'
import userReducers from './features/users/userSlice'
import notificationReducers from "./features/notifications/notificationsSlice";
import {apiSlice} from "./features/api/apiSlice";

export default configureStore({
  reducer: {
    posts: postReducers,
    users: userReducers,
    notifications: notificationReducers,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(apiSlice.middleware)
})
