import React from 'react'
import { useDispatch } from 'react-redux';
import { setEpicModalShow } from '../redux/slice/epic';
import CreateEpicModal from '../component/CreateEpicModal';

export default function Epic() {
	const dispatch = useDispatch();

	const handleClickCreateEpic = () => {
		dispatch(setEpicModalShow(true))
	}

	return (
		<div className='epic-body'>
			<div className='epic-title'>
				<button className='epic-title-button' onClick={handleClickCreateEpic}>创建任务组</button>
			</div>
			<CreateEpicModal />
		</div>
	)
}
