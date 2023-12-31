import { configureStore } from '@reduxjs/toolkit'
import dropReduce from './slice/drop'
import projectReducer from './slice/project'
import kanbanReducer from './slice/kanban'
import epicReducer from './slice/epic'

export const store = configureStore({
    reducer: {
        drop: dropReduce,
        project: projectReducer,
        kanban: kanbanReducer,
        epic: epicReducer
    },
})