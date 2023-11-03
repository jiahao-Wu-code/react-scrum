import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { updateKanban } from "../../api/project";


const initialState = {
    kanbanState: [
        // {
        //     id: 'column1',
        //     title: 'Column 1',
        //     tasks: [
        //         { id: 'task1', content: 'Task 1', type: 'task', owner: 'Tim' },
        //         { id: 'task2', content: 'Task 2', type: 'bug', owner: 'Jim' },
        //         { id: 'task3', content: 'Task 3', type: 'task', owner: 'Tony' },
        //     ],
        // },
        // {
        //     id: 'column2',
        //     title: 'Column 2',
        //     tasks: [
        //         { id: 'task4', content: 'Task 4', type: 'bug', owner: 'Jay' },
        //         { id: 'task5', content: 'Task 5', type: 'success', owner: 'Jack' },
        //     ],
        // },
        // {
        //     id: 'column3',
        //     title: 'Column 3',
        //     tasks: [
        //         { id: 'task6', content: 'Task 6', type: 'task', owner: 'Jay' },
        //         { id: 'task7', content: 'Task 7', type: 'bug', owner: 'Jack' },
        //     ],
        // },
    ],
    projectId: ''
}

export const updateKanbanDataAsync = createAsyncThunk(
    'drop/updateKanbanDataAsync',
    async (_, thunkApi) => {
        const store = thunkApi.getState();
        const projectId = store.drop.projectId
        const kanbanData = store.drop.kanbanState
        thunkApi.dispatch(updateKanban(projectId, kanbanData))
    }
)


const reorderList = (list, startIndex, endIndex) => {
    const res = list;
    const [remove] = res.splice(startIndex, 1);
    list.splice(endIndex, 0, remove);
    return list
}

export const dropSlice = createSlice({
    name: 'dropSlice',
    initialState,
    reducers: {
        // 拖拽 colomn
        kanbanOrder: (state, actions) => {
            // console.log("action", state, actions)
            /**
             * actions 包含
             * @param payload {Object} ----> payload:{source,destination}
             * @param type {String} ----> type
             */
            reorderList(
                state.kanbanState,
                actions.payload.source,
                actions.payload.destination
            )
        },

        // 拖拽 同一个colomn的task
        taskSameOrder: (state, actions) => {
            const colomn = state.kanbanState.find(item => item.id === actions.payload.sourceColomnId)
            reorderList(
                colomn.tasks,
                actions.payload.source,
                actions.payload.destination
            )
        },

        // 拖拽 不同colomn的task
        taskDiffOrder: (state, actions) => {
            // console.log("first", actions)
            const sourceColomn = state.kanbanState.find(item => item.id === actions.payload.sourceColomnId);
            const destinationColomn = state.kanbanState.find(item => item.id === actions.payload.destinationColomnId);
            const [remove] = sourceColomn.tasks.splice(actions.payload.source, 1);
            console.log("remove", remove)
            destinationColomn.tasks.splice(actions.payload.destination, 0, remove);
        },

        addKanban: (state, actions) => {
            state.kanbanState.push({
                kanbanKey: actions.payload,
                id: actions.payload,
                tasks: []
            })
        },
        addTask: (state, actions) => {
            const kanbanKey = actions.payload.kanbanKey;
            const task = actions.payload.task;
            const kanban = state.kanbanState.find(item => item.kanbanKey === kanbanKey)
            kanban.tasks.push(task);

        },

        setKanbanData: (state, actions) => {
            state.kanbanState = actions.payload
        },

        setProjectId: (state, actions) => {
            state.projectId = actions.payload
        },

        updateTask: (state, { payload }) => {
            console.log(payload)
            const kanban = state.kanbanState.find(item => item.kanbanKey === payload.kanbanKey);
            const index = kanban.tasks.findIndex(item => item.id === payload.taskId)
            kanban.tasks[index] = payload.taskData
        }
    }
})
export const { kanbanOrder, taskSameOrder, taskDiffOrder, addKanban, addTask, setKanbanData, setProjectId, updateTask } = dropSlice.actions

export const kanbanSelector = (state) => {
    return state.drop.kanbanState
}
export default dropSlice.reducer