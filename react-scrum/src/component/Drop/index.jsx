import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import '../../css/drop.css';
import TaskDrop from './TaskDrop';
import { Button } from 'antd';
import { useSelector } from 'react-redux';
import { kanbanSelector } from '../../redux/slice/drop'

export default function DropContainer() {
    const initialData = useSelector(kanbanSelector)
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
