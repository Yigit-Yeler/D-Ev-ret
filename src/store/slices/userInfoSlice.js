import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: []
}

const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userInfo = action.payload
        }
    }
})

export const { setUser } = userInfoSlice.actions

export default userInfoSlice