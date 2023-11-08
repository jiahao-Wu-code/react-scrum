import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setEpicModalShow } from '../redux/slice/epic';
import CreateEpicModal from '../component/CreateEpicModal';
import EpicList from '../component/EpicList';
import { useParams } from 'react-router-dom';
import { getProjectByIdAsync } from '../redux/slice/project';

export default function Epic() {
	const dispatch = useDispatch();

	const params = useParams()
	console.log("params", params)

	const handleClickCreateEpic = () => {
		dispatch(setEpicModalShow(true))
	}

	useEffect(()=> {
		// 获取当前项目 并且保存到store，防止数据丢失
		dispatch(getProjectByIdAsync(params.id))
	},[params.id])

	return (
		<div className='epic-body'>
			<div className='epic-title'>
				<button className='epic-title-button' onClick={handleClickCreateEpic}>创建任务组</button>
			</div>
			<CreateEpicModal />
			<EpicList />
		</div>
	)
}
