import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:8011/api',
    withCredentials:true
})

request.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error);
})
request.interceptors.response.use((res) => {
    return res.data;
}, (err) => {
    return Promise.reject(err)
})

export default request