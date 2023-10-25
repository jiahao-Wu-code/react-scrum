import React from 'react'
import LoginWrap from '../component/LoginWrap'
import { Form, Input, Button } from 'antd'
import { Link } from 'react-router-dom';
import { addUser } from '../api/user';
export default function Register() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        addUser(values)
    };

    return (
        <LoginWrap>
            <Form form={form} onFinish={onFinish}>
                <h2>请注册</h2>
                <p>注册界面</p>
                <Form.Item name={'username'} rules={[{ message: '请输入用户名', required: true }]}>
                    <Input type='text' id='username' placeholder={'用户名'} />
                </Form.Item>
                <Form.Item name={'password'} rules={[{ message: '请输入密码', required: true }]}>
                    <Input.Password id='password' placeholder={'密码'} />
                </Form.Item>
                <Button htmlType="submit" className='login-button' type="primary">注册</Button>
                <Link className='login-enroll' to={'/login'}>已有账号！直接登录</Link>
            </Form>
        </LoginWrap>
    )
}
