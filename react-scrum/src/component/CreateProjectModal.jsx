import { Form, Modal, Input, Select } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { useState } from 'react'

export default function CreateProjectModal() {
    const [form] = useForm();

    const orgs_options = [
        { label: '研发', value: '研发' },
        { label: '产品', value: '产品' }
    ]

    const users_options = [
        { label: 'Jim', value: 'Jim' },
        { label: 'Tom', value: 'Tom' }
    ]

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} title={'创建项目'}>
            <Form name="basic" autoComplete="off" form={form}>
                <Form.Item
                    label="项目名称"
                    name="name"
                    rules={[{ required: true, message: '请输入项目名称' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="所在部门"
                    name="organization"
                    rules={[{ required: true, message: '请选择部门' }]}
                >
                    <Select
                        options={orgs_options}
                    >
                    </Select>
                </Form.Item>
                <Form.Item
                    label="负责人"
                    name="owner"
                    rules={[{ required: true, message: '请选择负责人' }]}
                >
                    <Select
                        options={users_options}
                    >
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    )
}
