import { List, Popover, Typography } from 'antd'
import React from 'react'

export default function UserPopover() {
    const content = (
        <div className='project-create'>
            <Typography.Text type={'secondary'}>组员列表</Typography.Text>
            <List>
                <List.Item className='user-listItem'>
                    <p>James</p>
                </List.Item>
                <List.Item className='user-listItem'>
                    <p>Rose</p>
                </List.Item>
                <List.Item className='user-listItem'>
                    <p>Lilard</p>
                </List.Item>
            </List>
        </div>
    )
    return (
        <Popover content={content}>
            <h3 style={{ cursor: 'pointer', marginRight: '20px' }}>组员</h3>
        </Popover>
    )
}
