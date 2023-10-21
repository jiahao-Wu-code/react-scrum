import { configureStore } from '@reduxjs/toolkit'
import dropReduce from './slice/drop'

export const store = configureStore({
    reducer: {
        drop: dropReduce
    },
})