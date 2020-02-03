import axios from 'axios';
import qs from 'qs';
/**
 * @param { axios发起请求 1. 请求  2. 响应 }
 *  
 * @param { axios 拦截器： }
 * 
 */ 
// 创建实例 axios
const instance = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 2000,
})


instance.interceptors.request.use((config) => {
  // token
  config.headers.token = localStorage.getItem('token');
  // 授权验证
  config.headers.Authorization = 'Basic';
  // 参数处理 post get
  config.method === 'post'
    ?config.data = qs.stringify({...config.data})
    :config.params = {...config.params}
  // 数据响应格式：
   config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  return config;
}, (err) => {
  Promise.reject(err)
})

instance.interceptors.response.use((response) => {
  if (response.data) {
    return response.data
  } else {
    console.log('error')
  }
}, (error) => {
  // 状态码

})

export default instance;


