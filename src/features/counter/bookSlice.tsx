// bookSlice.ts
import { AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Step 1: Create an async action
type PayloadType = any;

export const fetchBooks: AsyncThunk<PayloadType, void, {}> = createAsyncThunk(
    'books/fetchBooks',
    async () => {
        const response = await axios.get('/data/data.json');
        // console.log('esponse,,,', resposnse.data)
        // state.books.push(response.data)
        return response.data;
    }
);

// Step 2: Create slice
export const bookSlice = createSlice({
    name: 'books',
    initialState: { books: [], status: 'idle', error: null },
    reducers: {
        // you can have normal reducers here
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.status = 'idle';
                state.books = action.payload;
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error.message || 'Unexpected error occurred';
            });
    },
})


export default bookSlice.reducer