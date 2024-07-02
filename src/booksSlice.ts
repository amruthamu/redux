import { createSlice, PayloadAction } from '@reduxjs/toolkit';


//his slice manages the state related to the selected books.
//BooksState: Defines the shape of the books state.
//initialState: The initial state of the books.
//booksSlice: A slice created using createSlice from Redux Toolkit.
//setBooks: An action creator to update the selected books state.

interface BooksState {
    selectedBooks: string[];
}

const initialState: BooksState = {
    selectedBooks: [],
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks: (state, action: PayloadAction<string[]>) => {
            state.selectedBooks = action.payload;
        },
    },
});

export const { setBooks } = booksSlice.actions;

export default booksSlice.reducer;
