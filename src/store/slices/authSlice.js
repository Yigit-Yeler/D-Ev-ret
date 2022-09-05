import { createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import NavigationPathEnum from '../../../core/enum/navigationPathEnum'

const initialState = {
    isSuccess: 0, // 0: loading, 1: success, 2: error
    user: []
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signUp: (state, action) => {
            state.user = action.payload

        },
        signIn: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { signIn, signUp } = authSlice.actions

export default authSlice