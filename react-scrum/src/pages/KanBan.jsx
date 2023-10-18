import React from 'react'
import SearchForm from '../component/SearchForm'

export default function KanBan() {
    return (
        <div className='kanban-body'>
            <div className="kanban-title">
                <h1>敏捷项目管理研发看板</h1>
            </div>
            <SearchForm />
            <div className="drop-wrap"></div>
        </div>
    )
}
