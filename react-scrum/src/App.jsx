import RouterConfig from "./router";
import './App.css'
import EventBus from "./utils/event";
import { useEffect } from "react";
import { notification } from 'antd'
import { GLOBAL_ERROR_TIPS, GLOBAL_SUCCESS_TIPS } from "./utils/const";
import { useDispatch } from "react-redux";
import { getOrgListAsync, getTaskTypeListAsync, getUserListAsync } from "./redux/slice/project";
function App() {

    const [api, contextHolder] = notification.useNotification();

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserListAsync())
        dispatch(getOrgListAsync())
        dispatch(getTaskTypeListAsync())
    }, [])

    const openNotificationWithIcon = (type, msg) => {
        api[type]({
            message: msg,
            placement: 'topRight',
        })
    };

    useEffect(() => {
        // 订阅
        EventBus.on(GLOBAL_ERROR_TIPS, (msg) => {
            openNotificationWithIcon('error', msg);
        })

        // EventBus.on(GLOBAL_SUCCESS_TIPS, (msg) => {
        //     openNotificationWithIcon('success', msg);
        // })
    }, [])


    return (
        <div className="App">
            {contextHolder}
            <RouterConfig />
        </div>
    );
}

export default App;
