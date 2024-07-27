import { AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

type PayloadType = any;
interface FetchBooksParams {
    url: string;
}
export const fetchData: AsyncThunk<PayloadType, FetchBooksParams, {}> = createAsyncThunk(
    'books/fetchBooks',
    async ({ url }, { rejectWithValue }) => {
        try {
            // const response = await axios.get('data/data.json');
            const response = await axios.get(url);
            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            }
            console.log('Fetched data:', response.data);
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