import axios from 'axios'

const api_root = process.env.NODE_ENV === 'development' ? '/api' : 'https://malltest.newmsr.com/small';

//首页数据
export function getIndexData() {
  const url = api_root + '/index/getIndexData'; //请求路径
  const data = {}; //请求参数
  //使用插件axios发送ajax，get请求
  return axios.get(url, {
      params: data
  }).then((res) => {
      return Promise.resolve(res.data)    //返回的Promise.resolve
  })
}



