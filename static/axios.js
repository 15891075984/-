import axios from 'axios'
import qs from 'qs'
const service=axios.create({
    baseURL:process.env.BASE_URL,
    timeout:1000
})
service.interceptors.response.use(function(res){
    return Promise.resolve(res)
},function(error){
    if(error.response.status==404){
        error.message = `请求地址出错: ${error.response.config.url}`
    }
    if(error.response.status==500){
        error.message = `服务器出错: ${error.response.config.url}`
    }
    return Promise.reject(error);
})


export default service