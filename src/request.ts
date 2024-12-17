import axios from "axios";
import {showFailToast} from "vant";

const request = axios.create({
    baseURL: 'http://192.168.1.74:8011/',
    withCredentials: true
})

request.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error);
})
request.interceptors.response.use((res) => {
    const {data} = res;
    if (data.code === 40100) {
        if(!res.request.responseURL.includes('/user/login') &&
            !window.location.pathname.includes('/user/login')){
            showFailToast('请先登录')
            window.location.href = `/user/login?redirect=${window.location.href}`;
        }
    }
    return data;
}, (err) => {
    return Promise.reject(err)
})

export default request