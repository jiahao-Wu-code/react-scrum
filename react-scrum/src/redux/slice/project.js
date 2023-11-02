import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProject, getProjectById } from "../../api/project";
import { setKanbanData, setProjectId } from "./drop";
import { setCurrentProject } from "./kanban";
import { getOrgList, getTaskTypeList, getUserList } from "../../api/user";

export const getProjectAsync = createAsyncThunk(
    'porject/getProjectAsync',
    async () => {
        const res = await getProject();
        return res.data.data
    }
)

export const getUserListAsync = createAsyncThunk(
    'project/getUserListAsync',
    async () => {
        const res = await getUserList();
        return res.data
    }
)

export const getOrgListAsync = createAsyncThunk(
    'project/getOrgListAsync',
    async () => {
        const res = await getOrgList();
        return res.data
    }
)

export const getTaskTypeListAsync = createAsyncThunk(
    'project/getTaskTypeListAsync',
    async () => {
        const res = await getTaskTypeList();
        return res.data
    }
)


export const getProjectByIdAsync = createAsyncThunk(
    'porject/getProjectByIdAsync',
    async (action, thunkApi) => {
        const res = await getProjectById(action)
        const kanban = res.data.kanban
        // 保存看板数据
        thunkApi.dispatch(setKanbanData(kanban))
        // 保存当前的project数据
        thunkApi.dispatch(setCurrentProject(res.data))
        thunkApi.dispatch(setProjectId(res.data._id))
        return kanban
    }
)


const initialState = {
    list: [],
    loading: false,
    userList: [],
    orgList: [],
    taskTypeList: []
}

export const projectSlice = createSlice({
    name: 'projectSlcie',
    initialState,
    reducers: {
        updateList: (state, actions) => {
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
        builder.addCase(getUserListAsync.fulfilled, (state, { payload }) => {
            state.userList = payload
        })
        builder.addCase(getOrgListAsync.fulfilled, (state, { payload }) => {
            state.orgList = payload
        })
        builder.addCase(getTaskTypeListAsync.fulfilled, (state, { payload }) => {
            state.taskTypeList = payload
        })
    }
})



export const selectProjectList = state => {
    return state.project.list
}

export const { updateList } = projectSlice.actions

export default projectSlice.reducer