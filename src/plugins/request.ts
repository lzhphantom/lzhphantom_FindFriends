import axios from "axios";
import {showFailToast} from "vant";

const request = axios.create({
    baseURL: 'http://localhost:8011/api',
    withCredentials: true
})

request.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error);
})
request.interceptors.response.use((res) => {
    return res.data;
}, (err) => {
    const {response} = err
    // if (response.status == 400) {
    //     showFailToast(response.data.data)
    // }
    return Promise.reject(err)

})

export default request