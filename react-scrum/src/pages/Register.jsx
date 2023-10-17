import React from 'react'
import LoginWrap from '../component/LoginWrap'
import { Form, Input, Button } from 'antd'
import { Link } from 'react-router-dom';

export default function Register() {
    const [form] = Form.useForm();

    return (
        <LoginWrap>
            <Form form={form}>
                <h2>请注册</h2>
                <p>注册界面</p>
                <Form.Item name={'username'} rules={[{ message: '请输入用户名', required: true }]}>
                    <Input type='text' id='username' placeholder={'用户名'} />
                </Form.Item>
                <Form.Item name={'password'} rules={[{ message: '请输入密码', required: true }]}>
                    <Input.Password id='password' placeholder={'密码'} />
                </Form.Item>
                <Button className='login-button' type="primary"></Button>
                <Link className='login-enroll' to={'/login'}>已有账号！直接登录</Link>
            </Form>
        </LoginWrap>
    )
}
