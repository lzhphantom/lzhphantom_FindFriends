import axios from "axios";
import {useRouter} from "vue-router";

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
    if (response.status === 400 && response.data.code === 40100) {

    }
    return Promise.reject(err)
})

export default request