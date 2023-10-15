import React from 'react'
import logo from '../../static/logo.png'
import ProjectPopover from './ProjectPopover'
import UserPopover from './UserPopover'

export default function Header() {
    return (
        <div className='header-wrap-body'>
            <button className='header-button'>
                <img className="header-logo" src={logo} alt='' />
                <h2 style={{marginRight: '30px'}}>scrum项目管理系统</h2>
            </button>
            <ProjectPopover />
            <UserPopover />
            <div className="header-login-out-btn">退出登录</div>
        </div>
    )
}
