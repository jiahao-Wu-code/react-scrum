import { Button } from 'antd'
import React from 'react'
import ProjectTable from '../component/ProjectTable'
import CreateProjectModal from '../component/CreateProjectModal'
import ProjectSearch from '../component/ProjectSearch'

export default function Project() {

    return (
        <div className="project-body-wrap">
            <div className="project-title-wrap">
                <h1>项目列表</h1>
                <Button>创建项目</Button>
            </div>

            <ProjectSearch />

            <div className='project-table-wrap'>
                <ProjectTable />
            </div>
            <CreateProjectModal />
        </div>
    )
}
