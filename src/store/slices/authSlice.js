import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userAuth: []
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signUp: (state, action) => {
            state.userAuth = action.payload

        },
        signIn: (state, action) => {
            state.userAuth = action.payload
        }
    }
})

export const { signIn, signUp } = authSlice.actions

export default authSlice