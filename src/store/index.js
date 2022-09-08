import { configureStore } from "@reduxjs/toolkit";
import authSlice from './slices/authSlice'
import userInfoSlice from "./slices/userInfoSlice";
export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        userInfo: userInfoSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        {
            serializableCheck: false,
        }
    ),

})