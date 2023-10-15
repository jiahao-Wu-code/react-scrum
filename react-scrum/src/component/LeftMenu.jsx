import React from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'

export default function LeftMenu() {
    return (
        <div>
            <Menu mode="inline">
                <Menu.Item key={'kanban'}>
                    <NavLink to={'/project/1/kanban'} className='link-title'>看板</NavLink>
                </Menu.Item>
                <Menu.Item key={'epic'}>
                    <NavLink to={'/project/1/epic'} className='link-title'>epic</NavLink>
                </Menu.Item>
            </Menu>
        </div>
    )
}
