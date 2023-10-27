import { configureStore } from '@reduxjs/toolkit'
import dropReduce from './slice/drop'
import projectReducer from './slice/project'

export const store = configureStore({
    reducer: {
        drop: dropReduce,
        project: projectReducer,
    },
})