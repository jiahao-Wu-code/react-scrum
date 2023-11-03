import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { Tag } from 'antd';
import { useDispatch } from 'react-redux';
import { setTaskModal } from '../../redux/slice/kanban';

export default function TaskDrop(props) {
    const dispatch = useDispatch();

    const column = props.task;
    const handleClickEditTask = (kanbanKey, taskId) => {
        dispatch(setTaskModal({
            show: true,
            kanbanKey,
            taskId,
            type: 'edit'
        }))
    }
    return (
        <Droppable droppableId={column.id} type="task">
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className='task-drop-wrap'
                >
                    {column?.tasks?.map((task, taskIndex) => (
                        <Draggable draggableId={task.id} index={taskIndex} key={task.id}>
                            {(provided, snapshot) => (
                                <div
                                    className='task-drag-wrap'
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    onClick={() => handleClickEditTask(column.kanbanKey, task.id)}
                                >
                                    <div className='task-card'>
                                        <div className='task-card-top'>
                                            <div className='task-head-picture' alt='' ></div>
                                            <p className='task-head-p'>{task.name}</p>
                                        </div>
                                        <div className='task-card-bottom'>
                                            <div className='task-owner'>{task.owner}</div>
                                            <div>
                                                <Tag color={task.type === 'task' ? 'processing' : task.type === 'bug' ? 'error' : 'success'}>{task.type}</Tag>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}
