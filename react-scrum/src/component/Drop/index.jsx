import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import '../../css/drop.css';
import TaskDrop from './TaskDrop';
import { Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { kanbanOrder, kanbanSelector, taskSameOrder, taskDiffOrder, updateKanbanDataAsync, addKanban } from '../../redux/slice/drop'
import { setTaskModal } from '../../redux/slice/kanban';

export default function DropContainer() {
    const [inputValue, setInputValue] = useState('')
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

            dispatch(updateKanbanDataAsync())
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

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const handlePressEnter = (e) => {
        const value = inputValue.replaceAll(' ', '');
        if (value.length) {
            dispatch(addKanban(value))
            dispatch(updateKanbanDataAsync())
            setInputValue('')
        }
    }

    const handleClickAddTask = (kanbanKey) => {
        dispatch(setTaskModal({
            show: true,
            kanbanKey,
            type: 'create'
        }))
    }

    return (

        <DragDropContext onDragEnd={onDragEnd}>
            {initialData.length !== 0 &&
                <Droppable droppableId="outer-container" direction="horizontal" type="column">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className='kanban-drop-wrap'
                        >
                            {initialData?.map((column, index) => (
                                <Draggable draggableId={column.kanbanKey} index={index} key={column.kanbanKey}>
                                    {(provided) => (
                                        <div
                                            className='kanban-drag-wrap'
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <h1>{column.kanbanKey}</h1>
                                            <TaskDrop task={column} />
                                            <Button className='new-task-btn' type="primary" ghost onClick={() => handleClickAddTask(column.kanbanKey)}>
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
            }
            <div className="kanban-drag-wrap">
                <Input onPressEnter={handlePressEnter} placeholder='新建看板名称' value={inputValue} onInput={handleInput} />
            </div>
        </DragDropContext>
    )
}
