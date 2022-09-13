import { configureStore } from "@reduxjs/toolkit";
import authSlice from './slices/authSlice'
import userInfoSlice from "./slices/userInfoSlice";
import locationSlice from "./slices/locationSlice";
import postsSlice from "./slices/postsSlice";
export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        userInfo: userInfoSlice.reducer,
        location: locationSlice.reducer,
        posts: postsSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        {
            serializableCheck: false,
        }
    ),

})