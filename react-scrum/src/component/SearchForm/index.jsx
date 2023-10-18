import { Button, Input, Select, Space } from 'antd'
import React from 'react'

export default function SearchForm() {


    const personOptions = [
        { label: 'James', value: 'James' },
        { label: 'Tim', value: 'Tim' },
        { label: 'Yi-co', value: 'Yi-co' },
    ]

    const typeOptions = [
        { label: 'Task', value: 'Task' },
        { label: 'Bug', value: 'Bug' },
        { label: 'Test', value: 'Test' },
    ]

    return (
        <div>
            <div className="search-form-wrap">
                <Input className='search-form-input' placeholder='任务名' />
                <Space size={'middle'}>
                    <Select className='search-form-select' options={personOptions} defaultValue={'Yi-co'} />
                    <Select className='search-form-select' options={typeOptions} defaultValue={'Task'} />
                    <Button>清除筛选</Button>
                </Space>
            </div>
        </div>
    )
}
