import { Button, Input, Select, Space, Form } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom';
import { getProjectById } from '../../api/project';
import { setKanbanData } from '../../redux/slice/drop';

export default function SearchForm() {

    const [form] = Form.useForm();
    const params = useParams()
    const projectId = params.id;
    const [searchParams] = useSearchParams()
    const searchEpic = searchParams.get('epic')
    const dispatch = useDispatch()

    useEffect(() => {
        if (searchEpic) {
            form.setFieldValue('epic', searchEpic)
            setTimeout(() => {
                searchData({
                    epic: searchEpic
                })
            }, 500);
        }
    }, [])


    const personOptions = useSelector(state => state.project.userList)

    const typeOptions = useSelector(state => state.project.taskTypeList)

    const epicOptions = useSelector(state => state.kanban.currentProject.epic)?.map(item => ({ label: item, value: item }))

    const reset = () => {
        form.resetFields()
        searchData()
    }

    // 搜索数据筛选
    const searchData = async (formData) => {
        const res = await getProjectById(projectId)
        const kanbanData = res.data.kanban
        const newKanbanData = kanbanData.map(item => {
            item.tasks = item.tasks.filter(task => {
                let isOwner = true,
                    isType = true,
                    isEpic = true,
                    isName = true
                if (formData?.name) {
                    if (task.name.indexOf(formData?.name) < 0) {
                        isName = false
                    }
                }
                if (formData?.owner) {
                    if (task.owner !== formData?.owner) {
                        isOwner = false
                    }
                }
                if (formData?.type) {
                    if (task.type !== formData?.type) {
                        isType = false
                    }
                }

                if (formData?.epic) {
                    if (task.epic !== formData?.epic) {
                        isEpic = false
                    }
                }
                return isOwner && isType && isEpic && isName
            })
            return {
                ...item,
                tasks: item.tasks
            }
        })
        console.log("72>>>", newKanbanData)
        dispatch(setKanbanData(newKanbanData))
    }

    const search = (e) => {
        form.validateFields().then((res) => {
            searchData(res)
        })
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
