import { Button, Input, Select } from 'antd'
import React from 'react'
import ProjectTable from '../component/ProjectTable'
import CreateProjectModal from '../component/CreateProjectModal'

export default function Project() {
    const options = [
        { value: 'Jack', label: 'Jack' },
        { value: 'Rose', label: 'Rose' },
        { value: 'Jim', label: 'Jim' },
        { value: 'Tony', label: 'Tony' },
    ]
    return (
        <div className="project-body-wrap">
            <div className="project-title-wrap">
                <h1>项目列表</h1>
                <Button>创建项目</Button>
            </div>
            <div className="project-search-wrap">
                <Input placeholder={'请输入项目名称'} className='search-wrap-input' />
                <Select
                    className='search-wrap-select'
                    style={{ width: 120 }}
                    options={options}
                >
                </Select>
            </div>
            <div className='project-table-wrap'>
                <ProjectTable />
            </div>
            <CreateProjectModal />
        </div>
    )
}
