import { Button, Input, Select, Space, Form } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'

export default function SearchForm() {

    const [form] = Form.useForm();


    const personOptions = useSelector(state => state.project.userList)

    const typeOptions = useSelector(state => state.project.taskTypeList)

    const epicOptions = useSelector(state => state.kanban.currentProject.epic)?.map(item => ({ label: item, value: item }))

    const reset = () => {
        form.resetFields()
    }

    const search = (e) => {

    }

    return (
        <Form layout="inline" form={form} style={{ marginBottom: '30px' }}>
            <Form.Item
                name="name"
                style={{ width: 200 }}
            >
                <Input placeholder={'任务名'} className='search-form-input' />
            </Form.Item>
            <Form.Item
                label="负责人"
                name="owner"
                style={{ width: 200 }}
            >
                <Select
                    className='search-wrap-select'
                    options={personOptions}
                    fieldNames={{ label: 'username', value: 'username' }}
                >
                </Select>
            </Form.Item>
            <Form.Item
                label="任务类型"
                name="type"
                style={{ width: 200 }}
            >
                <Select
                    className='search-wrap-select'
                    options={typeOptions}
                    fieldNames={{ label: 'name', value: 'type' }}
                />
            </Form.Item>
            <Form.Item
                label="Epic"
                name="epic"
                style={{ width: 200 }}
            >
                <Select
                    className='search-wrap-select'
                    options={epicOptions}
                />
            </Form.Item>
            <Button onClick={reset} style={{ marginRight: '18px' }}>重置</Button>
            <Button onClick={search} type="primary">查询</Button>
        </Form>
    )
}
