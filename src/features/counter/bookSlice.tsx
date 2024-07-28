import { AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { Method } from 'axios';

type PayloadType = any;
interface FetchBooksParams {
    url: string;
    method: Method;
    data?: any;
}
export const fetchData: AsyncThunk<PayloadType, FetchBooksParams, {}> = createAsyncThunk(
    'books/fetchBooks',
    async ({ url, method, data }, { rejectWithValue }) => {
        try {
            const response = await axios({
                url,
                method,
                data
            });

            if (response.status === 200) {
                return response.data;
            }
            return response.data;
        } catch (err) {
            console.error("An error occurred: ", err)
            return rejectWithValue(err.message || 'Unable to fetch books');
        }
    }
);

export const bookSlice = createSlice({
    name: 'books',
    initialState: { books: [], status: 'idle', error: null },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'idle';
                state.books = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error.message || 'Unexpected error occurred';
            });
    },
})


export default bookSlice.reducer