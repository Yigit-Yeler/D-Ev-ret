import { configureStore } from "@reduxjs/toolkit";
import authSlice from './slices/authSlice'
import userInfoSlice from "./slices/userInfoSlice";
import locationSlice from "./slices/locationSlice";
export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        userInfo: userInfoSlice.reducer,
        location: locationSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        {
            serializableCheck: false,
        }
    ),

})