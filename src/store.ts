import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import booksReducer from './booksSlice';


//The store is the central place where the state of the application is stored.
//configureStore: A function from Redux Toolkit to create the store with a single configuration object.
//reducer: An object where the keys are slice names and the values are the respective reducers.
//RootState and AppDispatch: Type definitions for the state and dispatch function to ensure type safety.

const store = configureStore({
    reducer: {
        user: userReducer,
        books: booksReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
