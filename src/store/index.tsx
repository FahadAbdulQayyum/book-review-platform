import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import bookReducer from '../features/counter/bookSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        books: bookReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;



// import { configureStore } from '@reduxjs/toolkit'
// const store = configureStore({
//     reducer: {
//         one: oneSlice.reducer,
//         two: twoSlice.reducer,
//     },
// })
// export type RootState = ReturnType<typeof store.getState>

// export default store