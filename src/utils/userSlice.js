// initializing the current state of the user slice when the Redux store is created or when the slice is reset.
// Returning null in the removeUser reducer, it effectively resets the state to null, which is your initial state.
// state represents the current state of the slice at the time the action is dispatched.
// The return statements determine the new state of the user slice, and the state parameter in the reducer represents the current state, which is updated based on the returned value. The initialState is used when the slice is first created or reset.

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload;
        },
        removeUser: (state, action) => {
            return null;
        }
    }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;