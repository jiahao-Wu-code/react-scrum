import React from 'react'
import logo from '../../static/logo.png'
import ProjectPopover from './ProjectPopover'
import UserPopover from './UserPopover'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate();
    const handleClickLogo = () => {
        navigate('/project')
    }

    return (
        <div className='header-wrap-body'>
            <button className='header-button'>
                <img className="header-logo" src={logo} alt='' onClick={handleClickLogo} />
                <h2 style={{ marginRight: '30px' }}>scrum项目管理系统</h2>
            </button>
            <ProjectPopover />
            <UserPopover />
            <div className="header-login-out-btn">退出登录</div>
        </div>
    )
}
