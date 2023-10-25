import axios from "axios";

const instance = axios.create();

instance.interceptors.response.use((response) => {
    console.log("response",response)
})

export default instance