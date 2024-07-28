import { AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { Method } from 'axios';

type PayloadType = any;
interface FetchBooksParams {
    url: string;
    method: Method;
    cookies?: string;
    data?: any;
    headers?: Record<string, string>;
}
export const fetchData: AsyncThunk<PayloadType, FetchBooksParams, {}> = createAsyncThunk(
    'books/fetchBooks',
    async ({ url, method, data, headers }, { rejectWithValue }) => {
        let response = {
            status: 200, data: null
        }
        try {
            response = await axios({
                url,
                method,
                data,
                headers,
                withCredentials: true
            });

            if (response.status === 200) {
                return response.data;
            }
            // return response.data;
        } catch (err) {
            console.error("An error occurred: ", err, err.response.data)
            response.data = err.response.data
            // return rejectWithValue(err.message || 'Unable to fetch books');
            return response.data;
        }
        return response.data;
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