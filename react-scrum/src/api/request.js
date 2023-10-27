import axios from "axios";
import EventBus from "../utils/event";
import { GLOBAL_ERROR_TIPS, GLOBAL_SUCCESS_TIPS } from "../utils/const";

const service = axios.create();

service.interceptors.response.use((res) => {
    // 做相应处理...
    console.log("first response: ", res)
    if (res.status === 200) {

        if (res.data.code === 401) {
            // 将页面直接跳转到  /login
            // window.location.href = '/login'

        }

        // 全局的错误处理
        if (res.data.code !== 0 && res.data.code !== 401) {
            EventBus.emit(GLOBAL_ERROR_TIPS, res.data.msg)
        }

        // 全局的成功处理
        if (res.data.code === 0) {
            EventBus.emit(GLOBAL_SUCCESS_TIPS, res.data.msg)
        }
    } else {

        EventBus.emit(GLOBAL_ERROR_TIPS, res.data.message)
    }
    return res.data
}, (err) => {
    // 发生错误时候的回调
    console.log("响应拦截出错", err)
    EventBus.emit(GLOBAL_ERROR_TIPS, err.response.data.message)
    return Promise.reject(err);
})

export default service