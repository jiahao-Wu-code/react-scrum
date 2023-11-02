import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentProject: [],
    taskModalStatus: {
        show: false,
        kanbanKey: '',
        taskId: '',
        type: 'create'  // create || edit 
    },
}

export const kanbanSlice = createSlice({
    name: 'kanban',
    initialState,
    reducers: {
        setCurrentProject: (state, { payload }) => {
            state.currentProject = payload
        },
        setTaskModal: (state, { payload }) => {
            Object.keys(payload).forEach(key => {
                state.taskModalStatus[key] = payload[key]
            })
        }
    }
})


export const { setCurrentProject, setTaskModal } = kanbanSlice.actions


export const selectCurrentProject = (state) => {
    return state.kanban.currentProject
}

export const selectTaskModalStatus = (state) => {
    return state.kanban.taskModalStatus
}

export const selectTaskModalShow = (state) => {
    return state.kanban.taskModalStatus.show
}

export default kanbanSlice.reducer