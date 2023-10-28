import React from 'react'
import { Form, Input, Select, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setTaskModal } from '../redux/slice/kanban';

export default function CreateKanbanModal() {
    const [form] = Form.useForm();

    const dispatch = useDispatch()
    const modalStatus = useSelector(state => state.kanban.taskModalStatus)
    const show = modalStatus.show
    const type = modalStatus.type
    const projectId = modalStatus.id
    console.log("first modal", modalStatus)

    async function onOk() {

    }

    function onCancel() {
        dispatch(setTaskModal({
            show: false
        }))
    }


    return (
        <Modal
            title={type === 'edit' ? '编辑项目' : '创建项目'}
            open={show}
            okText={type === 'edit' ? '编辑项目' : '创建项目'}
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
                        {/* {render_task_options(task_types)} */}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="负责人"
                    name="owner"
                    rules={[{ required: true, message: '请选择负责人' }]}
                >
                    <Select>
                        {/* {render_users_options(users)} */}
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
