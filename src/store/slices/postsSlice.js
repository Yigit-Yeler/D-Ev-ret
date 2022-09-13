import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: []
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.location = action.payload
        }
    }
})

export const { setPosts } = postsSlice.actions

export default postsSlice