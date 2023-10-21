import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    kanbanState: [
        {
            id: 'column1',
            title: 'Column 1',
            tasks: [
                { id: 'task1', content: 'Task 1', type: 'task', owner: 'Tim' },
                { id: 'task2', content: 'Task 2', type: 'bug', owner: 'Jim' },
                { id: 'task3', content: 'Task 3', type: 'task', owner: 'Tony' },
            ],
        },
        {
            id: 'column2',
            title: 'Column 2',
            tasks: [
                { id: 'task4', content: 'Task 4', type: 'bug', owner: 'Jay' },
                { id: 'task5', content: 'Task 5', type: 'success', owner: 'Jack' },
            ],
        },
        {
            id: 'column3',
            title: 'Column 3',
            tasks: [
                { id: 'task6', content: 'Task 6', type: 'task', owner: 'Jay' },
                { id: 'task7', content: 'Task 7', type: 'bug', owner: 'Jack' },
            ],
        },
    ]
}


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
        kanbanOrder: () => { },
        taskSameOrder: () => { },
        taskDiffOrder: () => { },
        addKanban: () => { },
        addTask: () => { },
    }
})
export const { add } = dropSlice.actions

export const kanbanSelector = (state) => {
    return state.drop.kanbanState
}
export default dropSlice.reducer