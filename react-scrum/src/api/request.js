import axios from "axios";

const service = axios.create();

service.interceptors.response.use((res) => {
    // 做相应处理...
    const response = res.data;
    return response
}, (err) => {
    // 发生错误时候的回调
    console.log("响应拦截出错", err)
})

export default service