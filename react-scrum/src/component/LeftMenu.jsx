import React, { useEffect, useState } from 'react'
import { Menu } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'

export default function LeftMenu() {
    const [active, setActive] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const pathnameArr = pathname.split('/');

    const items = [{
        label: '看板',
        key: 'kanban',
    }, {
        label: '任务组',
        key: 'epic',
    }]

    useEffect(() => {
        setActive(pathnameArr[3])
        // eslint-disable-next-line
    }, [])

    const handleClickMenu = (e) => {
        const key = e.key;
        setActive(key);
        navigate(`/project/1/${key}`)
    }

    return (
        <div>
            <Menu mode="inline" items={items} selectedKeys={active} onClick={handleClickMenu} />
        </div>
    )
}
