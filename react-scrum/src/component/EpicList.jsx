import React from 'react'
import { useSelector } from 'react-redux'
import { List, Button, Modal } from 'antd'

export default function EpicList() {

    const epicList = useSelector(state => state.kanban.currentProject.epic)
    console.log("epicList", epicList)

    const handleClickItem = (item) => {
        console.log("firstClickItem", item)
    }

    const DeleteText = () => {
        Modal.confirm({
            okText: '确定',
            cancelText: '取消',
            title: '确定删除该项目组吗？',
            onOk() {
                // return mutateAsync({ id: kanban.id })
            },
        })
    }


    return (
        <List
            itemLayout="horizontal"
            dataSource={epicList}
            renderItem={(item) => (
                <List.Item style={{ height: '170px' }}>
                    <List.Item.Meta
                        title={
                            <div className='list-item-title'>
                                <div onClick={() => {
                                    handleClickItem(item)
                                }} style={{ fontSize: '18px', color: 'black' }}>{item}</div>
                            </div>

                        }
                        description={
                            <div style={{ fontSize: '16px' }}>
                                <div>开始时间：暂无</div>
                                <div>结束时间: 暂无</div>
                                <Button onClick={DeleteText} danger style={{margin: '10px 0 0 -47px'}}>删除</Button>
                            </div>
                        }
                    />
                </List.Item>
            )}
        />
    )
}
