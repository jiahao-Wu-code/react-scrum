import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import classnames from 'classnames'

export default function TaskDrop(props) {
    const task = props.task;
    const list = task.task;
    return (
        <Droppable droppableId={task.kanbanKey} type='task'>
            {(provided, snapshot) => (
                <div className='task-dropp-wrap' ref={provided.innerRef} {...provided.droppableProps}>
                    {list?.map((item, index) => {
                        return (
                            <Draggable index={index} key={`${item.name}`}
                                draggableId={`${item.name}`}>
                                {(provided, snapshot) => {
                                    return (
                                        <div className='task-card' key={index} ref={provided.innerRef}>
                                            <div className='task-card-top'>
                                                <div className='task-head-picture' alt='' ></div>
                                                <p className='task-head-p'>{item.name}</p>
                                            </div>
                                            <div className='task-card-bottom'>
                                                <div className='task-owner'>{item.owner}</div>
                                                <div className={classnames({
                                                    new_task_type: true,
                                                    red: item.type === 'bug',
                                                    blue: item.type === 'task'
                                                })}>
                                                    <span className='task_type-span'>{item.type}</span>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                }}
                            </Draggable>
                        )
                    })}
                </div>
            )}
        </Droppable>
    )
}
