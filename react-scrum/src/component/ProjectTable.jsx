import { Button, Space, Table } from 'antd';
import React from 'react'

export default function ProjectTable() {
    const columns = [
        {
            title: '收藏',
            dataIndex: 'collect',
            key: 'collect',
            render: (text, record) => {
                return (
                    <div className='iconfont icon-shoucang shoucang-item'></div>
                )
            },
            width: '10%'
        },
        {
            title: '项目名称',
            dataIndex: 'name',
            key: 'name',
            width: '30%',
        },
        {
            title: '部门',
            dataIndex: 'organization',
            key: 'organization',
            width: '15%'
        },
        {
            title: '负责人',
            dataIndex: 'owner',
            key: 'owner',
            width: '15%'
        },
        {
            title: '创建时间',
            key: 'created',
            dataIndex: 'created',
        },
        {
            title: '操作',
            key: 'created',
            dataIndex: 'created',
            render: (_, record) => (
                <>
                    <Space>
                        <Button type='primary'>编辑</Button>
                        <Button type="primary" danger>删除</Button>
                    </Space>
                </>
            ),
        },
    ];
    const data = [
        {
            collect: false,
            name: '商城管理系统',
            organization: '研发部',
            owner: 'James',
            created: '2023-10-16',
        }
    ]
    return (
        <>
            <Table rowKey="created" className='project_table_css' dataSource={data} columns={columns} />
        </>
    )
}
