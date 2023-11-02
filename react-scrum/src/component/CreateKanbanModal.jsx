import React from 'react'
import { Form, Input, Select, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setTaskModal } from '../redux/slice/kanban';
import { addTask, updateKanbanDataAsync } from '../redux/slice/drop';

export default function CreateKanbanModal() {
    const [form] = Form.useForm();

    const dispatch = useDispatch()
    const { show, type, kanbanKey, id: projectId } = useSelector(state => state.kanban.taskModalStatus)

    const userList = useSelector(state => state.project.userList)
    const orgList = useSelector(state => state.project.orgList)
    const taskTypeList = useSelector(state => state.project.taskTypeList)


    function renderTaskOptions(arr) {
        return arr.map((item) => {
            return <Select.Option key={item.type} value={item.type}>{item.name}</Select.Option>
        })
    }


    function renderUsersOptions(arr) {
        return arr.map((item) => {
            return <Select.Option key={item._id} value={item.username}>{item.username}</Select.Option>
        })
    }

    async function onOk() {
        form.validateFields()
            .then(res => {
                // 创建
                res.id = Date.now() + ''
                if (type === 'create') {
                    dispatch(addTask({
                        kanbanKey,
                        task: res
                    }))
                }
                dispatch(updateKanbanDataAsync())
                dispatch(setTaskModal({
                    show: false
                }))
            }).catch(err => {
                console.log(err)
            })
    }

    function onCancel() {
        dispatch(setTaskModal({
            show: false
        }))
    }


    return (
        <Modal
            title={type === 'edit' ? '编辑任务' : '创建任务'}
            open={show}
            okText={type === 'edit' ? '编辑任务' : '创建任务'}
            onOk={onOk}
            onCancel={onCancel}
        >
            <Form
                name="basic"
                autoComplete="off"
                form={form}
                labelCol={{
                    span: 4,
                }}
            >
                <Form.Item
                    label="任务名称"
                    name="name"
                    rules={[{ required: true, message: '请输入任务名称' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="任务类型"
                    name="type"
                    rules={[{ required: true, message: '请选择任务类型' }]}
                >
                    <Select>
                        {renderTaskOptions(taskTypeList)}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="负责人"
                    name="owner"
                    rules={[{ required: true, message: '请选择负责人' }]}
                >
                    <Select>
                        {renderUsersOptions(userList)}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="epic"
                    name="epic"
                >
                    <Select
                        className='search_wrap_select'
                    />
                </Form.Item>
            </Form>
        </Modal>
    )
}
