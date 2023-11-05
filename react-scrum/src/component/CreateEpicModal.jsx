import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Form, Input } from 'antd'
import { createEpicAsync, setEpicModalShow } from '../redux/slice/epic'
import { useParams } from 'react-router-dom'
import { getProjectByIdAsync } from '../redux/slice/project'

export default function CreateEpicModal() {

    const [form] = Form.useForm()

    const dispatch = useDispatch()

    const params = useParams()
    const projectId = params.id

    const show = useSelector(state => state.epic.modalShow)

    const onOk = () => {
        form.validateFields().then(res => {
            dispatch(createEpicAsync({
                projectId,
                ...res
            }))
            // 关闭弹窗
            dispatch(setEpicModalShow(false))
            // 更新仓库数据
            dispatch(getProjectByIdAsync(projectId))
        }).catch(error => {

        })
    }

    const onCancel = () => {
        dispatch(setEpicModalShow(false))
    }

    return (
        <Modal
            title="创建EPIC"
            open={show}
            okText={'创建EPIC'}
            onOk={onOk}
            onCancel={onCancel}
            labelCol={{
                span: 4,
            }}
        >
            <Form
                name="basic"
                autoComplete="off"
                form={form}
            >
                <Form.Item
                    label="Epic名称"
                    name="epic_name"
                    rules={[{ required: true, message: '请输入Epic名称' }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    )
}
