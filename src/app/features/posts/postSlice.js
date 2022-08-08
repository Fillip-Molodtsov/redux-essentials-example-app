import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {id: 1, title: "1st post", content: "Hello!"},
    {id: 2, title: "2st post", content: "Hello again my friend!"}
]

const slice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { postAdded } = slice.actions

export default slice.reducer