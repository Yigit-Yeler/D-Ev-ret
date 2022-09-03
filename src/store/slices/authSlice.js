import { createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const initialState = {
    isSuccess: 0, // 0: loading, 1: success, 2: error
    user: []
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signUp: (state, action) => {
            // createUserWithEmailAndPassword(getAuth(), email, password)
            //     .then((res) => {

            //         navigation.replace(
            //             NavigationPathEnum.bottomTab,
            //             { screen: NavigationPathEnum.home }
            //         )
            //     })
            //     .catch((e) => {
            //         console.log('Firebase Errorr:: ', e)
            //     })
            // console.log(action.payload)
            // console.log(action.payload)
            console.log(action.payload[0])
            action.payload[1].navigate('SignIn')
        },
        signIn: (state, action) => {

        }
    }
})

export const { signIn, signUp } = authSlice.actions

export default authSlice