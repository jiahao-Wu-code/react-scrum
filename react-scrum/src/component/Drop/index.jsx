import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import '../../css/drop.css';
import TaskDrop from './TaskDrop';
import { Button } from 'antd';

export default function DropContainer() {
    const initialData = [
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
    ];

    const onDragEnd = (e) => {
        console.log("onDragEnd", e);
    }

    return (

        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="outer-container" direction="horizontal" type="column">
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className='kanban-drop-wrap'
                    >
                        {initialData.map((column, index) => (
                            <Draggable draggableId={column.id} index={index} key={column.id}>
                                {(provided) => (
                                    <div
                                        className='kanban-drag-wrap'
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <h1>{column.title}</h1>
                                        <TaskDrop task={column} />
                                        <Button className='new-task-btn' type="primary" ghost>
                                            新建task
                                        </Button>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}
