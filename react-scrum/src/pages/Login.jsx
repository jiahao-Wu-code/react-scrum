import React from 'react'
import LoginWrap from '../component/LoginWrap'
import { Form, Input, Button } from 'antd'
import { Link } from 'react-router-dom';

export default function Login() {
    const [form] = Form.useForm();

    return (
        <LoginWrap>
            <Form form={form}>
                <h2>请登录</h2>
                <p>登录界面</p>
                <Form.Item name={'username'} rules={[{ message: '请输入用户名', required: true }]}>
                    <Input type='text' id='username' placeholder={'用户名'} />
                </Form.Item>
                <Form.Item name={'password'} rules={[{ message: '请输入密码', required: true }]}>
                    <Input.Password id='password' placeholder={'密码'} />
                </Form.Item>
                <Button className='login-button' type="primary">登录</Button>
                <Link className='login-enroll' to={'/register'}>没有账号？注册新账号</Link>
            </Form>
        </LoginWrap>
    )
}
