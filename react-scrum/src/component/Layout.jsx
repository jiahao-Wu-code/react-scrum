import React from 'react'
import LeftMenu from './LeftMenu'
import Header from './Header'
import { Outlet, useLocation } from 'react-router-dom'

export default function Layout() {
    const loaction = useLocation();
    const isProject = loaction.pathname === '/project'
    return (
        <div className='layout-wrap'>
            {/* 头部 */}
            <div className="header-wrap">
                <Header />
            </div>
            {/* 左侧菜单栏 */}
            <div className="layout-wrap-project">
                {
                    isProject ? null : (
                        <div className="project_side_menu_wrap">
                            <LeftMenu />
                        </div>
                    )
                }
                {/* 内容区 */}
                <div className="project_wrap">
                    {/* 子组件 占位 */}
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}
