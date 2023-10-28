import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    currentProject: [],
}

export const kanbanSlice = createSlice({
    name: 'kanban',
    initialState,
    reducers: {
        setCurrentProject: (state, { payload }) => {
            state.currentProject = payload
        }
    }
})


export const { setCurrentProject } = kanbanSlice.actions


export const selectCurrentProject = (state) => {
    return state.currentProject
}
export default kanbanSlice.reducer