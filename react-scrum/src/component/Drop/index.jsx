import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import '../../css/drop.css';
import TaskDrop from './TaskDrop';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { kanbanOrder, kanbanSelector, taskSameOrder, taskDiffOrder } from '../../redux/slice/drop'

export default function DropContainer() {
    const initialData = useSelector(kanbanSelector)
    const dispatch = useDispatch()
    const onDragEnd = (e) => {
        console.log("onDragEnd", e);
        if (e.destination === null) {
            return
        }
        if (e.type === "column") {
            // colomn 拖拽
            dispatch(kanbanOrder({
                source: e.source.index,
                destination: e.destination.index
            }))
        }
        if (e.type === 'task') {
            if (e.source.droppableId === e.destination.droppableId) {
                // 同一个 colomn
                dispatch(taskSameOrder({
                    sourceColomnId: e.source.droppableId,
                    source: e.source.index,
                    destination: e.destination.index
                }))
            } else {
                // 不同的 colomn
                dispatch(taskDiffOrder({
                    sourceColomnId: e.source.droppableId,
                    destinationColomnId: e.destination.droppableId,
                    source: e.source.index,
                    destination: e.destination.index
                }))
            }
        }
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
