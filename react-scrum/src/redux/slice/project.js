import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProject } from "../../api/project";

export const getProjectAsync = createAsyncThunk(
    'porject/getProjectAsync',
    async () => {
        const res = await getProject();
        return res.data.data
    }
)


const initialState = {
    list: [],
    loading: false,
}

export const projectSlice = createSlice({
    name: 'projectSlcie',
    initialState,
    reducers: {
        updateList: (state, actions) => {
            console.log("23>>>", state, actions)
            return state.list = actions.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProjectAsync.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getProjectAsync.fulfilled, (state, { payload }) => {
            state.loading = false
            state.list = payload
        })
    }
})



export const selectProjectList = state => {
    return state.project.list
}

export const { updateList } = projectSlice.actions

export default projectSlice.reducer