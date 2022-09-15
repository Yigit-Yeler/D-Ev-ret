import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    location: {}
}

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation: (state, action) => {
            state.location = action.payload
        },
        clearLocation: (state, action) => {
            state.location = {}
        }
    }
})

export const { setLocation, clearLocation } = locationSlice.actions

export default locationSlice