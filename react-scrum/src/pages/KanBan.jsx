import React, { useEffect } from 'react'
import SearchForm from '../component/SearchForm'
import DropContainer from '../component/Drop'
import axios from '../utils/http'
export default function KanBan() {
    useEffect(()=> {
        axios.get('/api/projects')
    })
    return (
        <div className='kanban-body'>
            <div className="kanban-title">
                <h1>敏捷项目管理研发看板</h1>
            </div>
            <SearchForm />
            <div className="drop-wrap">
                <DropContainer />
            </div>
        </div>
    )
}
