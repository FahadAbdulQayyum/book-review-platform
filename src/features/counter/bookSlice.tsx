import { AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError, Method } from 'axios';

type PayloadType = any;
interface FetchBooksParams {
    url: string;
    method: Method;
    cookies?: string;
    data?: any;
    headers?: Record<string, string>;
}

interface State {
    books: any[];
    status: string;
    error: string | null; // Update the type to allow both string and null
}

const initialState: State = {
    books: [],
    status: 'idle',
    error: null,
};

export const fetchData: AsyncThunk<PayloadType, FetchBooksParams, {}> = createAsyncThunk(
    'books/fetchBooks',
    // async ({ url, method, data, headers }, { rejectWithValue }) => {
    async ({ url, method, data, headers }) => {
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
            if (err instanceof AxiosError) {
                // console.error("An error occurred: ", err, err.response.data)
                response.data = err.response?.data
                // return rejectWithValue(err.message || 'Unable to fetch books');
                return response.data;
            }
        }
        return response.data;
    }
);

export const bookSlice = createSlice({
    name: 'books',
    // initialState: { books: [], status: 'idle', error: null },
    initialState,
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
                // state.error = action.error.message ? action.error.message : 'Unexpected error occurred';
                state.error = action.error.message ? action.error.message : null;
            });
    },
})


export default bookSlice.reducer