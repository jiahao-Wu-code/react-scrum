import React, { useEffect } from 'react'
import SearchForm from '../component/SearchForm'
import DropContainer from '../component/Drop'
import { useParams } from 'react-router-dom'
import { getProjectByIdAsync } from '../redux/slice/project';
import { useDispatch } from 'react-redux';
import CreateKanbanModal from '../component/CreateKanbanModal';


export default function KanBan() {

    const params = useParams();
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getProjectByIdAsync(params.id))
    }, [params.id])

    return (
        <div className='kanban-body'>
            <div className="kanban-title">
                <h1>敏捷项目管理研发看板</h1>
            </div>
            <SearchForm />
            <div className="drop-wrap">
                <DropContainer />
            </div>
            <CreateKanbanModal />
        </div>
    )
}
