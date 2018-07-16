import axios from 'axios'
import router from '@/router'



// // http request 请求拦截器，有token值则配置上token值
// axios.interceptors.request.use(
//   config => {
//     if (token) { // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
//       config.headers.Authorization = token;
//     }
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   });

// // http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
// axios.interceptors.response.use(
//   response => {
//     console.log(response)
//     if (response.data.status == 1) {
//       router.push({
//         path: "/index",
//         querry: {
//           redirect: router.currentRoute.fullPath//从哪个页面跳转
//         } 
//       })
//     }
//     return response;
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )


//封装POST方法
export function $POST(url, data) {
  return axios({
    method: 'post',
    url: url,
    data: data,
    timeout: 10000
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((error) => {
    console.log(error)
  })
}

//封装GET方法
export function $GET(url, params) {
  return axios({
    method: 'get',
    url,
    params,
    timeout: 10000,
  }).then((res) => {
      return Promise.resolve(res.data)
  }).catch((error) => {
    console.log(error)
  })
}
