import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addEpic } from "../../api/epic";

const initialState = {
    modalShow: false,
}

export const createEpicAsync = createAsyncThunk(
    'epic/createEpicAsync',
    async (state, thunkApi) => {
        thunkApi.dispatch(addEpic(state))
    }
)

export const epicSlcie = createSlice({
    name: 'epicSlcie',
    initialState,
    reducers: {
        setEpicModalShow: (state, actions) => {
            state.modalShow = actions.payload
        }
    }
})

export const { setEpicModalShow } = epicSlcie.actions

export default epicSlcie.reducer