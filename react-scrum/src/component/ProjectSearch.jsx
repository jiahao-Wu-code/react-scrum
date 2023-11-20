import React, { useEffect } from 'react'
import { Input, Select, Form, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getProjectByQueryAsync } from '../redux/slice/project'

export default function ProjectSearch() {

    const usersOptions = useSelector(state => state.project.userList)
    const orgsOptions = useSelector(state => state.project.orgList)


    const [form] = Form.useForm()

    const dispatch = useDispatch()

    const reset = () => {
        form.resetFields()
    }
    const searchClick = () => {
        form.validateFields().then(res => {
            dispatch(getProjectByQueryAsync(res))
        })
    }

    useEffect(() => {
        dispatch(getProjectByQueryAsync({ page: 1 }))
    }, [])

    return (
        <div style={{ margin: 30 }}>
            <Form layout="inline" form={form} >
                <Form.Item
                    name="name"
                    style={{ width: 180 }}
                >
                    <Input placeholder={'任务名'} />
                </Form.Item>
                <Form.Item
                    label="部门"
                    name="organization"

                    style={{ width: 180 }}
                >
                    <Select
                        allowClear
                        options={orgsOptions}
                        fieldNames={{
                            label: 'name',
                            value: 'name',
                        }}
                    >
                    </Select>
                </Form.Item>
                <Form.Item
                    label="负责人"
                    name="owner"
                    style={{ width: 180 }}
                >
                    <Select
                        options={usersOptions}
                        allowClear
                        fieldNames={{
                            label: 'username',
                            value: 'username',
                        }}
                    >
                    </Select>
                </Form.Item>
                <Button onClick={reset} style={{ marginRight: 20 }}>重置</Button>
                <Button onClick={searchClick} type="primary">查询</Button>
            </Form>
        </div>
    )
}
