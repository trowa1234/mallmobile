//接口根路径。开发环境请求代理，生产环境请求正式地址
const api_root = process.env.NODE_ENV === 'development' ? '/api' : 'https://malltest.newmsr.com/small';


const urlsModule = {
  //首页数据
  getIndexData: api_root + '/index/getIndexData',

  //首页导航按钮数据
  indexNavBtn: api_root + '/index/button',
}


const ApiUrls = {...urlsModule}

export default ApiUrls