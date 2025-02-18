// src/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';




//This slice manages the state related to the user.
//name: Name of the slice.
//initialState: The initial state.
//reducers: An object where the keys are action names and the values are reducer functions.
//setUser: An action creator generated by createSlice to update the user state.

interface UserState {
    username: string;
}

const initialState: UserState = {
    username: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
