import { List, Popover, Typography } from 'antd'
import React from 'react'

export default function ProjectPopover() {
    const content = (
        <div className="project-create">
            <Typography.Text type={'secondary'}>收藏项目</Typography.Text>
            <List>
                <List.Item className='project-listItem'>
                    <p>商城管理系统</p>
                </List.Item>
                <List.Item className='project-listItem'>
                    <p>商城管理系统</p>
                </List.Item>
                <List.Item className='project-listItem'>
                    <p>商城管理系统</p>
                </List.Item>
            </List>
            <div className='project-create-name'>创建项目</div>
        </div>
    )
    return (
        <Popover content={content} placement='bottom'>
            <h3 style={{ cursor: 'pointer', marginRight: '30px' }}>项目</h3>
        </Popover>
    )
}
