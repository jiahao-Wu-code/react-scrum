import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import '../../css/drop.css';
import TaskDrop from './TaskDrop';

export default function DropContainer() {
    const dargData = [
        {
            kanbanKey: '需求评审',
            task: [
                {
                    name: '测试1',
                    type: 'test',
                    owner: 'Jim',
                    taskId: '1',
                },
                {
                    name: '后端1',
                    type: '研发',
                    owner: 'Tom',
                    taskId: '2',
                },
                {
                    name: '前端1',
                    type: '研发',
                    owner: 'Yi-co',
                    taskId: '3',
                },
            ]
        },
        {
            kanbanKey: '研发',
            task: [
                {
                    name: '测试2',
                    type: 'test',
                    owner: 'Jim',
                    taskId: '4',
                },
                {
                    name: '后端2',
                    type: '研发',
                    owner: 'Tom',
                    taskId: '5',
                },
                {
                    name: '前端2',
                    type: '研发',
                    owner: 'Yi-co',
                    taskId: '6',
                },
            ]
        }
    ]
    return (
        <DragDropContext>
            <Droppable droppableId="droppable-1" type="kanban" direction={'horizontal'}>
                {(provided, snapshot) => (
                    <div className='kanban-dropp-wrap' ref={provided.innerRef} {...provided.droppableProps}>
                        {dargData && dargData.map((item, index) => {
                            return (
                                <Draggable key={item.kanbanKey} index={index} draggableId={item.kanbanKey}>
                                    {(provided, snapshot) => {
                                        return (
                                            <div className="kanban-drag-wrap" ref={provided.innerRef} {...provided.dragHandleProps} {...provided.dragHandleProps}>
                                                <h1>{item.kanbanKey}</h1>
                                                <TaskDrop task={item} />
                                            </div>
                                        )
                                    }}
                                </Draggable>
                            )
                        })}
                        {provided.placeholder}
                    </div>)}
            </Droppable>
        </DragDropContext>
    )
}
