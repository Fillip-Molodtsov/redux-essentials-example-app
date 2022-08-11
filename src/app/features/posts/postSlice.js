import { createSlice } from "@reduxjs/toolkit"
import { sub } from 'date-fns'
import { nanoid } from '@reduxjs/toolkit'

const initialState = [
    {id: 1, title: "1st post", content: "Hello!", 
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0}
},
    {id: 2, title: "2st post", content: "Hello again my friend!", 
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0}}
]

const slice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        reactionAdded: (state, action) => {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === parseInt(postId, 10))
            if (existingPost) {
              existingPost.reactions[reaction]++
            }
        },
        postAdded: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare: (title, content, userId) => {
                return {
                    payload: {
                      id: nanoid(),
                      date: new Date().toISOString(),
                      title,
                      content,
                      user: userId
                    }
                }
            }
        },
        postUpdated: (state, action) => {
            const { id, title, content } = action.payload
            const existingPost = state.find(post => post.id === id)
            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
            }
        }
    }
})

export const { postAdded, postUpdated, reactionAdded } = slice.actions

export default slice.reducer