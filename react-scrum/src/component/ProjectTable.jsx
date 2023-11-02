import { Button, Space, Table } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProjectAsync, selectProjectList } from '../redux/slice/project';
import dayjs from 'dayjs'
import { StarOutlined, StarTwoTone } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

export default function ProjectTable() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProjectAsync());
    }, [])

    const columns = [
        {
            title: '收藏',
            dataIndex: 'collect',
            key: 'collect',
            render: (text, record) => {
                return (
                    record.collect ? <StarTwoTone /> : <StarOutlined />
                )
            },
            width: '10%'
        },
        {
            title: '项目名称',
            dataIndex: 'name',
            key: 'name',
            width: '30%',
            render: (text, record) => {
                return (
                    <NavLink to={`/project/${record._id}/kanban`}>{text}</NavLink>
                )
            },
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
            render: (_, record) => (
                <Space size="middle">
                    <div>{dayjs(record.created).format('DD/MM/YYYY')}</div>
                </Space>
            ),
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
    const data = useSelector(selectProjectList)
    return (
        <>
            <Table rowKey="created" className='project-table-css' dataSource={data} columns={columns} />
        </>
    )
}
