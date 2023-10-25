import RouterConfig from "./router";
import './App.css'
import EventBus from "./utils/event";
import { useEffect } from "react";
import { notification } from 'antd'
import { GLOBAL_ERROR_TIPS } from "./utils/const";
function App() {

    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (msg) => {
        api.error({
            message: msg,
            placement: 'topRight'
        })
    };

    useEffect(() => {
        // 订阅
        EventBus.on(GLOBAL_ERROR_TIPS, (msg) => {
            openNotificationWithIcon(msg);
        })
    }, [])


    return (
        <div className="App">
            {contextHolder}
            <RouterConfig />
        </div>
    );
}

export default App;
