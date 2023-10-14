import React from 'react'
import LeftMenu from './LeftMenu'
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className='layout-wrap'>
            <div className="header-wrap">
                <Header />
            </div>
            <div className="layout-wrap-project">
                <div className="project_side_menu_wrap">
                    <LeftMenu />
                </div>
                <div className="project_wrap">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}
